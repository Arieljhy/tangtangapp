<template>
	
		<f7-page class="dfk-page">
			
		 <f7-navbar title="待确认" back-link="返回" theme="white" sliding></f7-navbar>
		 
		 <f7-list media-list style="margin-top: 60px;" :key="n">
			<f7-list-item
						    
						    media="<img src=item.img>"
						    title="Item Title"
						    subtitle="Item Subtitle"
						    text="Some text"
						    after="Read more"
						  ></f7-list-item>
		</f7-list>	
		 
		 
		 
		</f7-page>
    
</template>

<script>
  export default {
    mounted: function () {
      console.log('加载我楼')
    }
  }
</script>


<style>
</style>