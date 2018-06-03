import axios from '../http.js'

export class loginAPI {
  static regist (params) {
    return axios.post('/tangtang/users', params).then(res => res.data)
  }
  static updateUser (params) {
    return axios.post('/tangtang/users/UpdateUser', params).then(res => res.data)
  }
  static login (params) {
    return axios.post('tangtang/users/Login', params).then(res => res.data)
  }
}