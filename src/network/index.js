import axios from '../http'

//const DEV_BASE_URL = 'http://127.0.0.1:4000'
//const PROD_BASE_URL = 'https://api.framework7.cn/mock_api'
//axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : DEV_BASE_URL

export class requestAPI {
  static testRequest (params) {
    return axios.post('/v2/article/get_tang_list_content', params).then(res => res.data)
  }
}
