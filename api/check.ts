export const config = { runtime: 'edge' }

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 60 * 1000
const MAX_KEYWORD_LEN = 200
const MAX_URL_LEN = 500

const ipHits = new Map<string, number>()

function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const last = ipHits.get(ip)
  if (!last) return false
  if (Date.now() - last >= RATE_LIMIT_WINDOW_MS) {
    ipHits.delete(ip)
    return false
  }
  return true
}

function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return json(405, { status: 'error', message: 'Method not allowed' })
  }

  const target = process.env.N8N_WEBHOOK_URL
  if (!target) {
    return json(500, { status: 'error', message: 'Server not configured' })
  }

  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return json(429, { status: 'error', message: 'Limit: 1 sprawdzenie co 5h. Spróbuj ponownie później.' })
  }

  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return json(400, { status: 'error', message: 'Nieprawidłowy JSON' })
  }

  const body = payload as { keyword?: unknown; client_url?: unknown }
  const keyword = typeof body.keyword === 'string' ? body.keyword.trim() : ''
  const clientUrl = typeof body.client_url === 'string' ? body.client_url.trim() : ''

  if (!keyword || keyword.length > MAX_KEYWORD_LEN) {
    return json(400, { status: 'error', message: 'Nieprawidłowa fraza' })
  }
  if (!clientUrl || clientUrl.length > MAX_URL_LEN || !isHttpUrl(clientUrl)) {
    return json(400, { status: 'error', message: 'Nieprawidłowy adres URL' })
  }

  ipHits.set(ip, Date.now())

  let upstream: Response
  try {
    upstream = await fetch(target, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ keyword, client_url: clientUrl }),
    })
  } catch {
    return json(502, { status: 'error', message: 'Nie udało się połączyć z serwisem generującym' })
  }

  const text = await upstream.text()
  return new Response(text, {
    status: upstream.status,
    headers: { 'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8' },
  })
}
