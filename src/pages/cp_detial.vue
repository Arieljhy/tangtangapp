<template>
	<f7-page class="cp_detial">
		<f7-navbar title="商品详情" back-link="返回" theme="white" sliding></f7-navbar>

      <f7-swiper pagination style="margin: 5px;">
        <f7-swiper-slide >
        <img src="../assets/img/chanpin/2.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/chanpin/cp1.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/chanpin/cp2.png"/>
        </f7-swiper-slide>
      </f7-swiper>
      
      <div>
      	<f7-list>
      		<f7-list-item>
      			<span  style="font-size: 30px;">红背心体验包</span>
      		</f7-list-item>
      		<f7-list-item>
      			<span style="color: red;font-size: 30px;">¥599</span>
      		</f7-list-item>
      		<f7-list-item>
      			
      		</f7-list-item>
      		
      	</f7-list>
      	
      	
      	
      </div>

		<f7-toolbar tabbar bottom style="margin-bottom: 10px;">
		
			        <f7-button class="tobutton" raised color="red" @click.native="addcart()">加入购物车</f7-button>
			              
			        <f7-button  class="tobutton" fill  style="background-color:#e21945 ;"
			        	@click.native="isbuy()">立即购买</f7-button>     
			              
			              
		</f7-toolbar>
		
		
	</f7-page>
	
	
</template>

<script>
import { requestAPI } from '../network/index.js'
	export default {
		data () {
			return {
				id: ''
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.id = this.$f7.mainView.activePage.context.id
			})
			 this.$nextTick(_ => {
			      this.$f7.swiper('.swiper-container', {
			        pagination:'.swiper-pagination',
			        paginationType: 'bullets',
			        direction: 'horizontal',
			        loop: true,
			        autoplay: 1500
			      })
    		 })
		},
		
		methods:{
			addcart(){
				console.log(this.id)
				console.log(this.$f7)
				requestAPI.testRequest().then(data => {
					this.$f7.alert('加入购物车成功','')
				}, eror => {
					this.$f7.alert('shibai', 'tishi')
				})
			},
			isbuy(){
				this.$f7.mainView.router.load({url: '/order_put/'})				
//				let that = this
//				this.$f7.mainView.router.load(
//	    		{
//	    			url: '/order_detil/',
//				    context:{
//				         id: that.id
//				    }
//	    		})
			}
			
		}
	}
</script>

<style>
	
	
	.cp_detial{
		background: white;
		
		
    .swiper-container {
      height:0px;
    }
    .swiper-slide {
    	display:inline-block;
    	text-align:center;
      background:white;
      img{
      	display:inline-block;
        width: 100%;
        height: 0px;
      }
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:50px;
      font-size:21px;
    }
    
    
  }
  .tobutton{
    	border: 1px solid; 
    	 width: 45%; 
    	height: 50px; 
    	text-align: center;
    	 text-align: center;
    	 font-size: 16px; 
    	 line-height: 50px;
    	
    }
</style>