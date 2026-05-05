import type { CheckAioRequest, CheckAioResponse } from '../types'

const ENDPOINT = '/api/check'

export async function checkAioOverview(payload: CheckAioRequest): Promise<CheckAioResponse> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => null)) as CheckAioResponse | null

  if (!response.ok) {
    throw new Error(data?.message || `Błąd serwera: ${response.status}`)
  }

  if (!data) {
    throw new Error('Nieprawidłowa odpowiedź serwera')
  }

  return data
}
