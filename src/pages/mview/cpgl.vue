<template>
	<f7-page>
		<f7-navbar title="产品管理" back-link="返回" theme="white" sliding style="text-align: center;">
			 <f7-nav-right>
			    <f7-button @click="editList">{{editTitle}}</f7-button>
			  </f7-nav-right>
		</f7-navbar>
		
		<f7-list form v-show="checkShow">
			
			
		  <f7-list-item checkbox name="my-checkbox" value="1" title="Checkbox 1" :checked="xx" @change="cons">
		  	
		  </f7-list-item>
		  <f7-list-item checkbox name="my-checkbox" value="2" title="Checkbox 1"  :checked="xx" @change="cons"></f7-list-item>
		  <f7-list-item checkbox name="my-checkbox" value="3" title="Checkbox 1"  :checked="xx" @change="cons"></f7-list-item>
		  <f7-list-iteam>
		  	<f7-button raised style="margin-top: 30px; border-color:#e21945 ;color: #e21945;width: 30%; float: right;">删除</f7-button>
		  </f7-list-iteam>
		</f7-list>
	
		
		
		
		<f7-list form v-show="!checkShow">		
		  <f7-list-item>
		  	 
				<div>hahah</div>
		  </f7-list-item>
		  
		</f7-list>
		
		
		
		
		
		
		
		<!--@click="selectAll" -->
		
		<f7-toolbar style="height: 80px;" >
		<f7-button fill class="mcpbutton" style="background-color: #e21945;" @click.native="toaddcp()"> 
			     添加商品</f7-button>
			     
		<f7-button raised  class="mcpbutton"  style="color:#e21945 ; border:1px solid #e21945;"  @click="editList"> 
			     批量管理</f7-button>	     
        </f7-toolbar>
	</f7-page>
</template>

<script>
	export default {
	data () {
		return {
			dataList: [
				{
					price: '20元',
					img: 'https://image.dnurse.com/shop/U1521618874323.jpg',
					id: '1'
				}
			],
			xx: false,
			checkShow: false,
			editTitle: '编辑'
		}
	},
	 methods: {
	 	toaddcp() {
    	this.$f7.mainView.router.load(
    		{
    			url: '/addcp/'
    		})
    	},
	 	cons (event) {
	 		console.log(event)
	 		let input = event.srcElement ? event.srcElement: event.target
	 		console.log(input.checked, input.value)
	 	},
	 	selectAll () {
	 		this.xx = !this.xx
	 	},
	 	editList () {
	 		this.checkShow = !this.checkShow
	 		this.editTitle = this.checkShow ? '取消':'编辑'
	 	}
	 	
	 }
	
	
	
	
	
	
	}
</script>

<style>
	.mcpbutton{
		width: 45%;
		 height: 50px;
		 float: right; 
		 text-align: center;
		  font-size: 20px;
		  line-height: 50px;
	}
</style>