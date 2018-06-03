<template>
	<f7-page class="cp_detial">
		<f7-navbar title="商品详情" back-link="返回" theme="white" sliding style="text-align: center;"></f7-navbar>

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
      
      <div style="padding-bottom: 50px;">
      	<f7-list>
      		<f7-list-item>
      			<span  class="infoTitle">{{dataInfo.name}}</span>
      		</f7-list-item>
      		<f7-list-item>
      			<span style="font-size: 14px;">
							商品详情：{{dataInfo.proInfo}}
						</span>
      		</f7-list-item>
      		<f7-list-item>
      			<span class="infoTitle">价格：<span style="color: red;">¥{{dataInfo.price}}</span></span>
      		</f7-list-item>
					
      		<f7-list-item>
      			<span class="infoTitle font-16">库存：<span>{{dataInfo.proNumb}}</span></span>
      		</f7-list-item>
					<f7-list-item title="选择商品数量" class="infoItem">
						<!-- <span class="infoTitle"></span> -->
						<div>
						
							<span class="cirlSpan" @click="calc('-1')">-</span>
							<span class="font-30 ">{{cpnumb}}</span>
							<span class="cirlSpan" @click="calc('1')">+</span>
						
						</div>
						
					</f7-list-item>
      	</f7-list>
      	
      	
      	
      </div>

		<f7-toolbar tabbar bottom style="margin-bottom: 10px;">
		
			        <f7-button class="tobutton" raised color="red" @click.native="addcart()">加入购物车<span class="carNum">{{carNum}}</span></f7-button>
			              
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
				id: '',
				dataInfo: {},
				cpnumb: 1,
				carNum: null,
				userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.id = this.$f7.mainView.activePage.context.id
				this.getProduct(this.id)
				this.getCarNum()
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
				let params = {
					userId: this.userInfo.id,
					createTime: new Date().getTime(),
				  payTime: new Date().getTime(),
					payPrice: parseFloat(this.dataInfo.price) * parseFloat(this.cpnumb),
					ordState: '0',
					productId: this.id,
					number: this.cpnumb
				}
				requestAPI.addshoppingCar(params).then(data => {
					this.$f7.alert('加入购物车成功')
					this.getCarNum()
				}, eror => {
					this.$f7.alert('添加失败！')
				})
			},
			isbuy(){
				this.$f7.mainView.router.load({
						url: '/order_put/',
						context: {
							price: this.dataInfo.price,
							id: this.id,
							proNumb: this.dataInfo.proNumb
						}
					})
			},
      getProduct (id) {
        requestAPI.getProductInfo(id).then(data => {
          this.dataInfo = data
        })
			},
			getCarNum () {
				let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
				if (userId) {
					requestAPI.getshoppingCar(userId).then(data => {
						this.carNum = data.length
					})
				}
			},
			calc (num) {
				num = parseFloat(num)
				if (this.cpnumb === parseFloat(this.dataInfo.proNumb)) {
					this.$f7.alert('已超出此商品库存')
					return false
				}
				this.cpnumb += num
				if (this.cpnumb < 1) {
					this.cpnumb = 1
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.cp_detial{
		background: white;
    .swiper-container {
			height: 280px;
			margin-top: 40px;
    }
    .swiper-slide {
    	display:inline-block;
    	text-align:center;
      background:white;
      img{
      	display:inline-block;
				width: 100%;
				height: 100%;
      }
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:50px;
      font-size:21px;
    }
    
    
		.cirlSpan {
			border: 2px solid cornflowerblue;
				height: 50px;
				width: 50px;
				display: inline-block;
				border-radius: 50%;
				text-align: center;
				line-height: 50px;
				font-size: 40px;
		}
		.infoTitle {
			font-size: 30px;
			display: inline-block;
			width: 100%;
		}
		.font-30 {
			font-size: 30px;
		}
		.font-16 {
			font-size: 16px;
		}
		.carNum {
			position: absolute;
			background: #E21945;
			color: white;
			width: 25px;
			height: 25px;
			font-size: 12px;
			line-height: 25px;
			border-radius: 50%;
			top: 5px;
			text-align: center;
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
<style lang="less">
	.infoItem .item-content .item-inner {
		height: 80px;
	}
</style>
