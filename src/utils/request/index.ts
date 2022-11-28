import axios from 'axios'
import { createRequest } from './axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

export const useRequest = createRequest(instance, {
  handleError(msg) {
    console.error(msg || '请求错误')
  },
})
