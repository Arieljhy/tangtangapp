<template>
	
	<f7-page>
		<f7-navbar title="提交订单" back-link="返回" theme="white" sliding></f7-navbar>
	
			
	     		<f7-list >
	     			
	     			
	     			<f7-list-item title="添加收货地址" link="/member/address/" style="margin-top: 60px; height: 100px;" >
	     				
	     				
				
					</f7-list-item>	
				
	     		</f7-list>
	     			
	     		<f7-list>
		            <f7-list-item title="" style="height: auto;">
		            	<img src="../../static/img/goods/03.jpg"  style="width: 100px; height: 100px;"/>
		            	<div style="width: 40%; height: 30px; float: right;">
		            	
			            	<span class="cirlSpan" @click="calc('1')">+</span>
			            	   <span class="font-30 ">{{cpnumb}}</span>
			            	<span class="cirlSpan" @click="calc('-1')">-</span>
		            	
		            	</div>
		            	
		            </f7-list-item>
		            
		           
		        </f7-list>
		        
		        <f7-list>
		            <f7-list-item title="合计">
		            	<span style="color: red; margin-right: 20px;">{{allprice}}</span>
		            </f7-list-item>
		        </f7-list> 
		       
		        <f7-button fill style="background-color: #e21945;  width: 100%; height: 60px;float: right; text-align: center; font-size: 20px;line-height: 50px;"> 
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
				allprice:0
			}
		},
		mounted () {
			this.$nextTick(() => {
				console.log('...')
			})
		},
		methods:{
			calc (num) {
				num = parseFloat(num)
				this.cpnumb += num
				if (this.cpnumb < 1) {
					this.cpnumb = 1
				}
			}
		}
	}
</script>

<style>
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