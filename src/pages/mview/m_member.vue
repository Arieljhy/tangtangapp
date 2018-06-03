<template>
	<div class="m_member">
		

		        <f7-list>
		            <f7-list-item title="更改用户名" link="" ></f7-list-item>
		        </f7-list>
		        
		        <f7-list>
		            <f7-list-item title="更改密码" link="" ></f7-list-item>
		        </f7-list> 
		   
		         <f7-button fill  style="background-color: #e21945; margin:10px" @click.native="tologin()" > 
			     退出登录</f7-button>
		    

	
	</div>
</template>

<script>
	export default {
	data () {
		return {
			nickname: ''
		}
	},
	mounted(){
		// this.$nextTick(() => {
		// 		this.nickname = this.$f7.mainView.activePage.context.nickname
		// })
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

<style>
</style>