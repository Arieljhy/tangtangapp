<template>
	<f7-page class="cpgl-view">
		 <f7-navbar title="产品管理" back-link="返回" theme="white" sliding></f7-navbar>
		

		
		
		<f7-list style="margin-top:50px">
			  
			 
			  
			  
			   <div class='form-div' style="background-color:white">
            		<div class="up-pic">
                		<input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @click.native="uploadpic(event)"/>
            		</div>
        		</div>
			  
			  
			  
			  
			</f7-list>



        <f7-list form  >
		 	<f7-list-item>
                <f7-label>商品标题</f7-label>
                <f7-input type="textarea" placeholder="输入商品标题"></f7-input>
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
		metod:{
			    uploadpic(e){
                  var self = this
                  console.log(e.target)
                  let file = e.target.files[0]
                  /* eslint-disable no-undef */
                  let param = new FormData()  // 创建form对象
                  param.append('file', file, file.name)  // 通过append向form对象添加数据
                  param.append('chunk', '0') // 添加form表单中其他数据
                  console.log('222222')
                  console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去

                  let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                  }
                 // 添加请求头
                axios.post('http://xingchen.mengdian.com/rest/user/headurl', param, config)
                    .then(response => {
                      console.log('222222')
                      if (response.data.code === 0) {
                            console.log(response.data.data)
                      }
                      console.log(response.data)
                    })
            }
		},
		components:{
			
		}
		
		
		
	}
	
	
	
</script>

<style>
</style>