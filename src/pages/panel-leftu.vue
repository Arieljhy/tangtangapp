<template>
	<f7-page class="leftu" style="margin-top: 1px;">
       <f7-navbar title="糖糖" sliding></f7-navbar>
							<f7-list>
								<f7-list-item link="/set/" title="个人设置" link-view="#main-view" link-close-panel></f7-list-item>
			
								<f7-list-item link="/qbdd/" title="我的订单" link-view="#main-view" link-close-panel></f7-list-item>
			
							</f7-list>
			
							<f7-list>
								<f7-button raised text="退出登录"  style="background-color: #e21945; border: none;color: white;" @click.native="tologin()"></f7-button>
							</f7-list>
			
	</f7-page>	  			
</template>
<script>
export default {
	data () {
		return {}
	},
	 methods: {
	 	tologin() {
    	this.$f7.mainView.router.load(
    		{
    			url: '/login/'
    		})
    	}
	 	}
	 
	 }
</script>