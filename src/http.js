//引入axios
import axios from 'axios'
// axios配置
axios.defaults.timeout = 30000
axios.defaults.baseURL = 'http://159.226.172.7'
axios.defaults.withCredentials = true
// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 拦截器
axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error.response.data)
    })
export default axios