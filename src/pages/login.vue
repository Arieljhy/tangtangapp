<template>
	<!--<div class="login-view">-->
		<f7-page class="page-navbar">
		
		 <div class="ttimg" style="width: 100%; height: 210px; background-color: #fafafa; display: block;text-align: center; margin-top: 0;">
		 	
		 	<img src="../assets/img/tangtang.png" style="display: inline-block; margin: auto;"/>
		 	
		 </div>
        
        
         <f7-list form style="margin-top: 10px;">       	
            <f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="text" placeholder="name"></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="password"></f7-input>
            </f7-list-item>
            
            <f7-button fill  style="background-color: #e21945; margin-top: 20px;" href="/umain/">登录</f7-button>
		 </f7-list>
		 
		 <f7-link href="/login/mlogin/" style="color: #e21945; float: left;">
		 	<span>管理员登录>></span>
		 </f7-link>
		 <f7-link href="/regist/" style="color: #e21945; float: right; margin-right: 15px;">
		 	<span>免费注册</span>
		 </f7-link>
		
		</f7-page>
		
		
	<!--</div>-->
</template>

<script>
  export default {
    mounted: function () {
	
    }
  }
</script>

<style>
	.login-view{
		background-color:white;
		
	}
	
</style>