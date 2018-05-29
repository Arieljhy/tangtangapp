import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import StoreCache from '../utils/storeCache'
import { login,regist,logout } from '../api/login'
import { getToken,setToken } from '../utils/auth' 

Vue.use(Vuex)
let cache = new StoreCache('vuex')

const state = {
  user: {},
  lang: cache.get('lang') || 'zh',
  contacts: [],
  timeline: [],
  name: '',
  token: ''
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})