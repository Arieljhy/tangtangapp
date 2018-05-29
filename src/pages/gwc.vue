<template>

		<f7-page class="page-navbar">
		 <f7-navbar title="购物车" back-link="返回"  theme="white" sliding></f7-navbar>
		 
		 <f7-block-title  style="margin-top: 60px;"></f7-block-title>
		
			
        
        <f7-list form>
		 <f7-list-item  
		 	title=""checkbox  name="my-checkbox"v-for="n in 3" :key="`f7${n}`"  style="height: auto;"  @swipeout:deleted="onSwipeoutDeleted">
		            	<img src="../../static/img/goods/03.jpg"  style="width: 100px; height: 100px; border: 1px solid blue; display: inline-block;"/>
		        <div style="width: 10%;">
		            	<p style="float: left;">樱桃</p>	
		            	<p style="float: left; font-size: 20px; color: red;">¥{{price}}</p>
		            	
		            	
		            	
		        </div>
		            	
		            	<div style="width: 40%; height: 30px; float: right;">
		            	
			            	<span class="cirlSpan" @click="calc('1')">+</span>
			            	   <span class="font-30 ">{{cpnumb}}</span>
			            	<span class="cirlSpan" @click="calc('-1')">-</span>
		            	
		            	</div>
		            	
		    </f7-list-item>

        </f7-list>
        
        
        <f7-list>
        	<f7-list-item title="合计" style="color: red; font-size: 30px;">
        		<span style="color: red; ">
        			
        			{{allprice}}
        		</span>
        	
        	
            </f7-list-item>
        	
        </f7-list>
        
        
         <f7-button fill style="background-color: #e21945;  width: 95%; height: 60px;float: right; text-align: center; font-size: 20px;line-height: 50px; border-radius: 10px; margin: 20px;"> 
			     购买 </f7-button>
        
        
        

		 
		</f7-page>

</template>

<script>
  export default {
  	data () {
			return {
				id: '',
				cpnumb: 1,
				price:50,
				allprice:0
			}
		},
    mounted: function () {
      console.log('加载我楼')
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
</style>