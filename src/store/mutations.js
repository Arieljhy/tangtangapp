import Vue from 'vue'
import * as types from './mutation-types'
import StoreCache from '../utils/storeCache'
import { name,state } from '../store/index'
import { getToken,setToken } from '../utils/auth'

let cache = new StoreCache('vuex')

export default {
  [types.INIT_USER_INFO] (state, { user }) {
    Vue.set(state, 'user', user)
  },
  [types.UPDATE_LANG] (state, lang) {
    Vue.set(state, 'lang', lang)
    cache.set('lang', lang)
  },
  [types.SET_NAME] (state, name){  
        state.name = name 
  },  
  [types.SET_TOKEN] (state, token) {  
        state.token = token 
        setToken(token)
   }  
}