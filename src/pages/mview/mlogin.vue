<template>
		
		<f7-page class="page-navbar">	
		 <f7-navbar title="管理员登录" style="text-align: center;" back-link="返回" theme="white" sliding></f7-navbar>
		 
		 <div class="ttimg" style="width: 100%; height: 210px; background-color: #fafafa; display: block;text-align: center; margin-top: 0;">
		 	
		 	<img src="../../assets/img/tangtang.png" style="display: inline-block; margin: auto;"/>
	 	
		 </div>
        
        
         <f7-list form style="margin-top: 10px;">       	
            <f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="text" placeholder="用户名" v-model="userName"></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="密码" v-model="pwd"></f7-input>
            </f7-list-item>
            
            <f7-button fill  style="background-color: #e21945; margin-top: 20px;" @click="login">登录</f7-button>
		 </f7-list>
		 
		</f7-page>
	
</template>

<script>
import { loginAPI } from '../../network/login'
export default {
    name: 'mlogin',
    data () {
      return {
        userName: '',
        pwd: ''
      }
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      // 登录函数
      login () {
        if (!!(this.userName) && !!(this.pwd)) {
          let params = {
            userName: this.userName,
            pwd: this.pwd
          }
          loginAPI.login(params).then(data => {
            if (data) {
              this.$f7.mainView.router.load({url: '/mmain/'})
            } else {
              this.$f7.alert('登录失败！请核对用户名密码是否正确')
            }
          }, () => {
            this.$f7.alert('登录失败！')
          })
        } else {
          this.$f7.alert('请完善登录信息！')
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
</style>