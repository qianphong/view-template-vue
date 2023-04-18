import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    showError?: boolean
  }
}

type RequestError = {
  code: string | number
  msg: string
  duration?: number
}

declare global {
  interface ApiResponse<T = any> {
    success: boolean
    code: number
    message: string
    data: T | null
  }
}
