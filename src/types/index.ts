export interface CheckAioRequest {
  keyword: string
  client_url: string
}

export interface CheckAioResponse {
  hasAioOverview: boolean
  content?: string
  generatedHtml?: string
  status: 'success' | 'error'
  message?: string
}
