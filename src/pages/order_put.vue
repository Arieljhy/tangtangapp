<template>
	
	<f7-page>
		<f7-navbar title="提交订单" back-link="返回" theme="white" sliding style="text-align: center;"></f7-navbar>
	
			
	     		<f7-list >
	     			<f7-list-item  >
						 <!-- link="/member/address/"  -->
						<f7-label>填写收货地址</f7-label>
						<f7-input type="textarea" placeholder="填写收货地址" v-model="address"></f7-input>
					</f7-list-item>	
				
	     		</f7-list>
	     			
	     		<f7-list>
					 <f7-list-item title="单价" class="infoItem">
						<span>￥{{price}}</span>
						
					</f7-list-item>
					
					<f7-list-item title="库存：" >
						<span>{{proNumb}}</span>
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
		        
		        <f7-list>
		            <f7-list-item title="合计">
		            	<span style="color: red; margin-right: 20px;">{{total}}元</span>
		            </f7-list-item>
		        </f7-list> 
		       
		        <f7-button @click="pay" fill style="background-color: #e21945;  width: 100%; height: 60px;float: right; text-align: center; font-size: 20px;line-height: 50px;"> 
			     支付 </f7-button>
        
	<!--<div>hahahah</div>-->
	</f7-page>
	
</template>
<script>
	export default {
		data () {
			return {
				id: '',
				cpnumb: 1,
				allprice:0,
				address: '',
				price: null,
				total: null,
				proNumb: null
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.id = this.$f7.mainView.activePage.context.id
				this.price = this.$f7.mainView.activePage.context.price
				this.proNumb = this.$f7.mainView.activePage.context.proNumb
				this.total = this.cpnumb * this.price
			})
		},
		methods:{
			calc (num) {
				num = parseFloat(num)
				if (this.cpnumb === parseFloat(this.proNumb)) {
					this.$f7.alert('已超出此商品库存')
					return false
				}
				this.cpnumb += num
				if (this.cpnumb < 1) {
					this.cpnumb = 1
				}
				this.total = this.cpnumb * this.price
			},
			pay () {
				this.$f7.alert('正在建设中')
			}
		}
	}
</script>

<style scoped>
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
	.font-30 {
		font-size: 30px;
	}
</style>
<style lang="less">
	.infoItem .item-content .item-inner {
		height: 80px;
	}
</style>