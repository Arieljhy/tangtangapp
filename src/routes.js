import LoginView from './pages/login.vue'
import PanelLeftU from './pages/panel-leftu.vue'
import Set from './pages/set.vue'
import Umain from './pages/u-main.vue'
import Mmain from './pages/mview/m-main.vue'
import Nickname from './pages/nickname.vue'

export default [
	{
    path: '/',
    component: LoginView
  },
  	{
    path: '/panel-leftu/',
    component:PanelLeftU 
  },
  {
    path: '/umain/',
    component: Umain
  },
  {
    path: '/mmain/',
    component: Mmain
  },

  {
    path: '/umain/member/profile/',
    component: require('./pages/profile.vue')
  },
  {
    path: '/language/',
    component: require('./pages/language.vue')
  },
  {
    path: '/member/address/',
    component: require('./pages/address.vue')
  },
  {
    path: '/feedback/',
    component: require('./pages/feedback.vue')
  },
  {
    path: '/about/',
    component: require('./pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./pages/Form.vue')
  },
  {
    path: '/order/',
    component: require('./pages/order.vue')
  },
  {
    path: '/login/',
    component: require('./pages/login.vue')
  },
  {
    path: '/regist/',
    component: require('./pages/regist.vue')
  },
  {
    path: '/login/mlogin/',
    component: require('./pages/mview/mlogin.vue')
  },
  {
    path: '/dfk/',
    component: require('./pages/dfk.vue')
  },
  {
    path: '/dfh/',
    component: require('./pages/dfh.vue')
  },
  {
    path: '/dsh/',
    component: require('./pages/dsh.vue')
  },
  {
    path: '/qbdd/',
    component: require('./pages/qbdd.vue')
  },
  {
    path: '/gwc/',
    component: require('./pages/gwc.vue')
  },
  {
    path: '/set/',
    component: Set
  },
  {
  	path: '/cp_detail/',
  	component: require('./pages/cp_detial.vue')
  },
  {
  	path: '/order_put/',
  	component: require('./pages/order_put.vue')
  },
  {
  	path: '/cpgl/',
  	component: require('./pages/mview/cpgl.vue')
  },
  {
  	path: '/ddgl/',
  	component: require('./pages/mview/ddgl.vue')
  },
  {
  	path: '/xxgl/',
  	component: require('./pages/mview/xxgl.vue')
  },
   {
  	path: '/addcp/',
  	component: require('./pages/mview/addcp.vue')
  },
    {
  	path: '/adduser/',
  	component: require('./pages/mview/adduser.vue')
  },
    {
  	path: '/m_member/',
  	component: require('./pages/mview/m_member.vue')
  },
    {
  	path: '/nickname/',
  	component: Nickname
  }
  
  
  
]