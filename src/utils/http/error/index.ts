import type { AxiosError } from 'axios'
import type { RequestError } from '../types'
import { logout } from '../external'
import {
  DEFAULT_REQUEST_ERROR_CODE,
  DEFAULT_REQUEST_ERROR_MSG,
  ERROR_STATUS,
  NETWORK_ERROR_CODE,
  NETWORK_ERROR_MSG,
  REQUEST_TIMEOUT_CODE,
  REQUEST_TIMEOUT_MSG,
} from './config'
import { showErrorMsg } from './msg'

function exeStrategyActions(actions: [boolean, () => void][]) {
  actions.some(item => {
    const [flag, action] = item
    if (flag) action()

    return flag
  })
}

type ErrorStatus = keyof typeof ERROR_STATUS

/**
 * 处理axios请求失败的错误
 * @param axiosError - 错误
 */
export function handleAxiosError(axiosError: AxiosError) {
  const error: RequestError = {
    code: DEFAULT_REQUEST_ERROR_CODE,
    msg: DEFAULT_REQUEST_ERROR_MSG,
  }

  const actions: [boolean, () => void][] = [
    [
      // 网路错误
      !window.navigator.onLine || axiosError.message === 'Network Error',
      () => {
        Object.assign(error, {
          code: NETWORK_ERROR_CODE,
          msg: NETWORK_ERROR_MSG,
        })
      },
    ],
    [
      // 超时错误
      axiosError.code === REQUEST_TIMEOUT_CODE &&
        axiosError.message.includes('timeout'),
      () => {
        Object.assign(error, {
          code: REQUEST_TIMEOUT_CODE,
          msg: REQUEST_TIMEOUT_MSG,
        })
      },
    ],
    [
      // 请求不成功的错误
      Boolean(axiosError.response),
      () => {
        const errorCode: ErrorStatus =
          (axiosError.response?.status as ErrorStatus) || 'DEFAULT'
        const msg = ERROR_STATUS[errorCode]
        if (errorCode === 401) logout()

        Object.assign(error, { code: errorCode, msg })
      },
    ],
  ]

  exeStrategyActions(actions)

  showErrorMsg(error)

  return error
}
