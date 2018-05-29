<template>
	<div>
			<f7-card  style="margin-top: 60px;">
				  <f7-card-header>
				  	<span>2018.04.04  16:44:20</span>
				  	<span>交易成功</span>
				  </f7-card-header>
				  <f7-card-content>
						<f7-list media-list style="margin-top: 60px;" :key="n">
						  <f7-list-item						    
						    media="<img src=item.img>"
						    title="Item Title"
						    subtitle="Item Subtitle"
						    text="Some text"
						    after="Read more"
						  ></f7-list-item>
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