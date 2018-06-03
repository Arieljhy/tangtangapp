import axios from '../http'

//const DEV_BASE_URL = 'http://127.0.0.1:4000'
//const PROD_BASE_URL = 'https://api.framework7.cn/mock_api'
//axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : DEV_BASE_URL

export class requestAPI {
  static testRequest (params) {
    return axios.post('/v2/article/get_tang_list_content', params).then(res => res.data)
  }
  static getProductList (state) {
    return axios.get(`/tangtang/product?proSate=${state}&page=1&pageSize=50`).then(res => res.data)
  }
  static addProduct (productInfo, path) {
    return axios.post(`/tangtang/product/${path}`, productInfo).then(res => res.data)
  }
  static getProductInfo (id) {
    return axios.get(`/tangtang/product/${id}`).then(res => res.data)
  }
  static delProduct (productList) {
    return axios.post('/tangtang/product/DeleteByIds', productList).then(res => res.data)
  }
  static getshoppingCar (userId) {
    return axios.get(`/tangtang/shoppingCart/${userId}`).then(res => res.data)
  }
  static addshoppingCar (params) {
    return axios.post('/tangtang/shoppingCart', params).then(res => res.data)
  }

}
