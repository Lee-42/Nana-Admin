import axios from 'axios'
import store from '@/store'
import { setItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    // 设置请求头, 在这里统一注入token
    config.headers.accessToken = store.getters.token
    return config // 返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 状态码策略
 */
const statusStrategy = {
  200: (headers, data) => {
    let { MFPToken } = headers
    if (MFPToken) setItem(TOKEN, MFPToken)
    return Promise.resolve(data)
  },
  401: (headers, data) => {
    return Promise.reject(data)
  },
  472: (headers, data) => {
    return Promise.reject(data)
  },
  475: (headers, data) => {
    return Promise.reject(data)
  },
  489: (headers, data) => {
    return Promise.reject(data)
  }
}

service.interceptors.response.use(
  (response) => {
    let { status, headers, data } = response
    if (statusStrategy[status]) {
      return statusStrategy[status](headers, data)
    } else {
      return Promise.reject(data)
    }
  },
  (error) => {
    let { status, headers, data } = error.response
    if (statusStrategy[status]) {
      statusStrategy[status](headers, data)
    } else {
      return Promise.reject(data)
    }
  }
)

export default service
