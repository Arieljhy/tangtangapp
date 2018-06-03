<template>

		<f7-page class="page-navbar">
		 <f7-navbar title="购物车" back-link="返回"  theme="white" sliding style="text-align: center;"></f7-navbar>
		 
		 <f7-block-title  style="margin-top: 60px;"></f7-block-title>
		
			
        
        <f7-list>
		 <f7-list-item checkbox  name="carCheck" v-for="(item, index) in carList" :key="index" @change="changeState()"  @swipeout:deleted="onSwipeoutDeleted(item.id)">
		            	<!-- <img src="../../static/img/goods/03.jpg"  style="width: 100px; height: 100px; border: 1px solid blue; display: inline-block;"/> -->
		        <div style="width: 40%; float: left;">
		            	<span>{{item.product.name}}</span>
                  <span>¥{{item.product.price}}</span>
		            	<!-- <p style="float: left; font-size: 20px; color: red;"></p> -->
		        </div>
            <div style=" float: left;">
              <span class="cirlSpan" @click="calc($event, '-1', index)">-</span>
              <span class="font-30 ">{{item.number}}</span>
              <span class="cirlSpan" @click="calc($event, '1', index)">+</span>
            </div>
		            	
		    </f7-list-item>
        </f7-list>
        <f7-list style="margin-top: 20px;">
        	<f7-list-item title="合计">
        		<span >
        			{{allprice}}元
        		</span>
        	
        	
            </f7-list-item>
        	
        </f7-list>
         <f7-button @click="buy" fill style="background-color: #e21945;  width: 95%; height: 60px;float: right; text-align: center; font-size: 20px;line-height: 50px; border-radius: 10px; margin: 20px;"> 
			     购买 </f7-button>
        
        
        

		 
		</f7-page>

</template>

<script>
  import { requestAPI } from '../network/index.js'
  export default {
  	data () {
			return {
				id: '',
				cpnumb: 1,
				price:50,
        allprice: 0,
        carList: []
			}
		},
    mounted () {
      this.getCarNum()
    },
    methods:{
      calc (event, num, index) {
        event.stopPropagation()
        event.preventDefault()
        num = parseFloat(num)
				this.carList[index].number += num
				if (this.carList[index].number < 1) {
					this.carList[index].number = 1
        }
        this.carList[index].payPrice = this.carList[index].number * this.carList[index].product.price
        this.changeState()
      },
      onSwipeoutDeleted (id) {
        console.log(id)
      },
      buy () {
        this.$f7.alert('正在建设中')
      },
			getCarNum () {
				let userId = JSON.parse(sessionStorage.getItem('userInfo')).id
				if (userId) {
					requestAPI.getshoppingCar(userId).then(data => {
            this.carList = data
					})
				}
      },
      changeState (event) {
        let checkData = document.getElementsByName('carCheck')
        if (checkData.length > 0) {
          let arr = []
          let num = 0
          for (let i = 0; i < checkData.length; i++) {
            if (checkData[i].checked === true) {
              num += parseFloat(this.carList[i].payPrice)
            }
          }
          this.allprice = num
        }
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
</style>