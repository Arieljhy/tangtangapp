<template>
	
	<div class="regist-view">
	<f7-page class="page-navbar">
    	
    	
        <f7-navbar title="修改个人信息" back-link="返回" theme="white" sliding></f7-navbar>
        
        
        <f7-list form style="margin-top: 50px;">       	
            <f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="text" placeholder="用户名" v-model="userInfo.userName"></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="密码" v-model="userInfo.password"></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>确认密码</f7-label>
                <f7-input type="password" placeholder="确认密码" v-model="userInfo.againPassword"></f7-input>
            </f7-list-item>
            
            <f7-button fill @click="register"  style="background-color: #e21945; margin-top: 20px;">保存修改</f7-button>
		 </f7-list>
        
     </f7-page>
        
    </div>
</template>

<script>
import { loginAPI } from '../network/login'
export default {
    name: 'change',
    data () {
      return {
        userInfo: {
          id: JSON.parse(sessionStorage.getItem('userInfo')).id,
          userName: JSON.parse(sessionStorage.getItem('userInfo')).userName,
          password: '',
          againPassword: ''
        }
      }
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      // 注册函数
      register () {
        console.log(this.userInfo)
        if (this.judge()) {
          let params = {
            id: this.userInfo.id,
            userName: this.userInfo.userName,
            pwd: this.userInfo.password
          }
          loginAPI.updateUser(params).then(data => {
            let that = this.$f7
            this.$f7.alert('修改成功！', function() {
            })
          }, () => {
            this.$f7.alert('修改失败！')
          })
        }
      },
      // 判断函数
      judge () {
        if (!(this.userInfo.userName) || !(this.userInfo.password) || !(this.userInfo.againPassword)) {
          this.$f7.alert('请完善信息！')
          return false
        } else if (this.userInfo.password !== this.userInfo.againPassword) {
          this.$f7.alert('两次密码输入不一致，请您重新输入')
          return false
        } else {
          return true
        }
      }
    },
    created () {
    },
    components: {
      /* 注册组件 */
    }
  }
</script>

<style>
	.regist-view{
	
		
		
		
	}
	
	
	
</style>