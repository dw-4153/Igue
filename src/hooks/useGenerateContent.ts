import { useState, useEffect } from 'react'
import { checkAioOverview } from '../lib/api'
import type { CheckAioResponse } from '../types'

const RATE_LIMIT_KEY = 'aio_last_check'
const RATE_LIMIT_MS = 5 * 60 * 60 * 1000

function getRemainingMs(): number | null {
  const raw = localStorage.getItem(RATE_LIMIT_KEY)
  if (!raw) return null
  const diff = Date.now() - parseInt(raw, 10)
  if (diff >= RATE_LIMIT_MS) return null
  return RATE_LIMIT_MS - diff
}

function formatRemaining(ms: number): string {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  if (h > 0) return `${h}h ${m}min`
  return `${m} min`
}

export function useCheckAio() {
  const [result, setResult] = useState<CheckAioResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null)

  useEffect(() => {
    const remaining = getRemainingMs()
    setTimeRemaining(remaining !== null ? formatRemaining(remaining) : null)
  }, [])

  const check = async (keyword: string, clientUrl: string) => {
    const remaining = getRemainingMs()
    if (remaining !== null) {
      setError(`Możesz sprawdzić kolejną frazę za ${formatRemaining(remaining)}. Limit: 1 sprawdzenie co 5h.`)
      return
    }

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const data = await checkAioOverview({ keyword, client_url: clientUrl })
      if (data.status === 'error') {
        throw new Error(data.message || 'Nieznany błąd')
      }
      setResult(data)
      localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()))
      setTimeRemaining(formatRemaining(RATE_LIMIT_MS))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas sprawdzania')
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setResult(null)
    setError(null)
  }

  return { result, isLoading, error, check, reset, timeRemaining }
}
