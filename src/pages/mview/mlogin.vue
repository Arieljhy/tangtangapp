<template>
		
		<f7-page class="page-navbar">	
		 <f7-navbar title="管理员登录" back-link="返回" theme="white" sliding></f7-navbar>
		 
		 <div class="ttimg" style="width: 100%; height: 210px; background-color: #fafafa; display: block;text-align: center; margin-top: 0;">
		 	
		 	<img src="../../assets/img/tangtang.png" style="display: inline-block; margin: auto;"/>
	 	
		 </div>
        
        
         <f7-list form style="margin-top: 10px;">       	
            <f7-list-item>
                <f7-label>管理员ID</f7-label>
                <f7-input type="text" placeholder=""></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder=""></f7-input>
            </f7-list-item>
            
            <f7-button fill  style="background-color: #e21945; margin-top: 20px;" href="/mmain/">登录</f7-button>
		 </f7-list>
		 
		</f7-page>
	
</template>

<script>
import {mapState} from 'vuex'
export default {
	mounted: function () {
      console.log('加载我楼')
   },
  computed: {
    ...mapState({
      userInfo: state => state.user,
    })
  }
}
</script>

<style>
</style>