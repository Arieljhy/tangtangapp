<template>
	<f7-page class="cpgl-view">
		 <f7-navbar title="添加用户" back-link="返回" theme="white" sliding></f7-navbar>
		

		
		
		<f7-list style="margin-top:50px">
			  
			 
			  
			  
			  
			  
			  
			</f7-list>



        <f7-list form  >
		 	<f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="name" placeholder="输入用户名"></f7-input>
            </f7-list-item>
            <f7-list-item >
                <f7-label>价格</f7-label>
                <f7-input type="text" placeholder="0.00"></f7-input>
            </f7-list-item>
            
            <f7-list-item>
                <f7-label>库存</f7-label>
                <f7-input type="text" placeholder="0"></f7-input>
            </f7-list-item>

        </f7-list>

         <f7-button fill style="background-color: #e21945;  width: 100%; height: 60px;float: right; text-align: center; font-size: 20px;line-height: 50px;"> 
			     确认添加</f7-button>
        
		
	</f7-page>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				
			}
		},
		mounted:{},

		components:{
			
		}
		
		
		
	}
	
	
	
</script>

<style>
</style>