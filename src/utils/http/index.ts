import type { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import Axios, { AxiosError } from 'axios'

import { getToken } from './external'
import { showErrorMsg } from './error/msg'
import { handleAxiosError } from './error'

const defaultConfig: AxiosRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  baseURL: '/api',
}

class VHttp {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private whiteList = ['/login']
  /** 防止重复刷新token */

  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig)

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    VHttp.axiosInstance.interceptors.request.use(
      async config => {
        /** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
        return this.whiteList.some(v => config.url?.includes(v))
          ? config
          : new Promise(resolve => {
              const token = getToken()
              if (token) {
                config.headers.Custom = token
                resolve(config)
              } else {
                resolve(config)
              }
            })
      },
      error => {
        return Promise.reject(error)
      },
    )
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    const instance = VHttp.axiosInstance
    instance.interceptors.response.use(
      response => {
        return response.data
      },
      error => {
        const $error = error
        $error.isCancelRequest = Axios.isCancel($error)
        handleAxiosError($error)
        // 所有的响应异常 区分来源为取消请求/非取消请求
        return Promise.reject($error)
      },
    )
  }

  /** 通用请求工具函数 */
  public request<T>(method: Method, url: string, param?: AxiosRequestConfig) {
    const config = {
      method,
      url,
      ...param,
    } as AxiosRequestConfig
    // 单独处理自定义请求/响应回掉
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      setTimeout(() => {
        VHttp.axiosInstance
          .request(config)
          .then(response => {
            const res = response as unknown as ApiResponse<T>
            if (res?.success) {
              resolve(res)
            } else {
              if (config.showError !== false)
                showErrorMsg({ code: 1, msg: res.message })

              reject(new AxiosError(res.message))
            }
          })
          .catch(error => {
            reject(error)
          })
      }, 500)
    })
  }

  /** 单独抽离的post工具函数 */
  public post<T, P>(url: string, config?: AxiosRequestConfig<T>) {
    return this.request<P>('post', url, config)
  }

  /** 单独抽离的get工具函数 */
  public get<T, P>(url: string, config?: AxiosRequestConfig<T>) {
    return this.request<P>('get', url, config)
  }
}

export const http = new VHttp()
