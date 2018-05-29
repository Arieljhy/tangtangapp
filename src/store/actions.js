import axios from 'axios'
import * as types from './mutation-types'
import { getToken,setToken,getName,setName } from '../utils/auth' 
import { login,regist,logout } from '../api/login'
export function getLoginUser({commit}) {
  axios.get('/user_login.json').then(res => {
    let user = res.data.user
    commit(types.INIT_USER_INFO, {
      user
    })
  })
}

export function setLang({ commit }, lang) {
  commit(types.UPDATE_LANG, lang)
}
//登录
export function ulogin({commit},userInfo) {  
        const name = userInfo.name.trim() 
        const password = userInfo.password.trim()  
        return new Promise((resolve, reject) => { 
        	login(name, password).then(response => {
            const data = response.data  
            commit('SET_NAME', data.name) 
            commit('SET_TOKEN', data.token)  
            setName(data.name) 
            setToken(data.token)  
            resolve(response) 
        }).catch(error => { reject(error) })
        })
}

//注册
export function Regist({ commit }, userInfo) {   
        const name= userInfo.name.trim()   
        const password = userInfo.password.trim()   
        return new Promise((resolve, reject) => {   
          regist(name, password).then(response => {   
            const data = response.data   
            commit('SET_NAME', data.name)   
            commit('SET_TOKEN', data.token)  
            setName(data.name)
            setToken(data.token)
            resolve(response) 
          }).catch(error => { reject(error) })
        })
}
//登出
export function LogOut({ commit, state }) {  
      return new Promise((resolve, reject) => {  
        logout().then(response => {  
          commit('SET_NAME', '')  
          commit('SET_TOKEN', '')  
          setName('')  
          setToken(false)  
          //removeName();  
          //removeToken();  
          resolve(response) 
        }).catch(error => {
          reject(error)  
        })  
      })  
    }
//前端 登出
export function FedLogOut({ commit }) {   
        return new Promise(resolve => {  
    setToken(false)  
commit('SET_TOKEN', false)  
resolve() 
        })
      }  
    
 
