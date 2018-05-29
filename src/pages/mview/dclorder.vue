<template>
	<div>
			<f7-card  style="margin-top: 60px;">
				  <f7-card-header>
				  	<span>订单创建时间： 2018.04.04  16:44:20</span>
				  	<span>用户提交成功</span>
				  </f7-card-header>
				  <f7-card-content>
						<f7-list media-list style="margin-top: 60px;" >
						  <f7-list-item					
						    title="cp_name"
						    subtitle="Item Subtitle"
						    text="商品详细内容能"
						    after="Read more">
						  </f7-list-item>
						  <f7-list-item>
						  	<f7-button  style="width: 40%;display: inline-block; float: left;">取消订单</f7-button>
						    <f7-button style="width: 40%;display: inline-block;float: right;">确认订单</f7-button>
						  </f7-list-item>	
						</f7-list>
				  </f7-card-content>
				  <f7-card-footer>
				  	<span>共2件</span>
				  	<span>合计：300</span>
				  
				  </f7-card-footer>
				</f7-card>
		
		
		
	</div>
</template>

<script>
 export default{
 	data () {
      return {
      }
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
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