<template>
	<f7-page class="cpgl-view">
		 <f7-navbar title="商品详情" back-link="返回" theme="white" sliding></f7-navbar>
		

		
		
		<f7-list style="margin-top:50px">
      <!-- <div class='form-div' style="background-color:white">
          <div class="up-pic">
              <input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @click.native="uploadpic(event)"/>
          </div>
      </div> -->
		</f7-list>



        <f7-list form  >
		 	    <f7-list-item>
            <f7-label>商品名称</f7-label>
            <f7-input type="textarea" placeholder="输入商品名称" v-model="product.name"></f7-input>
          </f7-list-item>
          <f7-list-item >
            <f7-label>商品单价</f7-label>
            <f7-input type="number" placeholder="商品单价"  v-model="product.price"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>商品简介</f7-label>
            <f7-input type="textarea" placeholder="商品简介" v-model="product.proTitle"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>商品详情</f7-label>
            <f7-input type="textarea" placeholder="商品详情" v-model="product.proInfo"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>库存数量</f7-label>
            <f7-input type="number" placeholder="库存数量" v-model="product.proNumb"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>商品状态</f7-label>
            <f7-input type="switch" v-model="state" @change="changeState"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-button fill class="btn" @click="addProduct"> 
          确认</f7-button>
        
		
	</f7-page>
</template>

<script>
  import {requestAPI} from '../../network/index.js'
	export default {
		data(){
			return{
				product: {
          name: '', // 名称
          price: '', // 价格
          proNumb: '', // 库存
          proPic: 'https://image.dnurse.com/shop/U1521618874323.jpg', // 图片
          proTitle: '', // 简介
          proInfo: '', // 商品介绍详情
          proSate: '', // 商品状态1：售卖；0：下架
        },
        state: true,
        id: ''
			}
		},
		mounted () {
			this.$nextTick(() => {
        this.id = this.$f7.mainView.activePage.context.id
        if (this.id !== 'null') {
          this.getProduct(this.id)
        }
			})
    },
		methods: {
      changeState (event) {
        console.log(this.state)
      },
      getProduct (id) {
        requestAPI.getProductInfo(id).then(data => {
          if (data.proSate === '1') {
            this.state = true
          } else {
            this.state = false
          }
          this.product = data
        })
      },
      addProduct () {
        if (this.product.name && this.product.price && this.product.proNumb && this.product.proTitle && this.product.proInfo) {
          if (this.state) {
            this.product.proSate = '1'
          } else {
            this.product.proSate = '0'
          }
          let productInfo = Object.assign({}, this.product)
          let path = ''
          if (this.id !== 'null') {
            path = 'Update'
          }
          requestAPI.addProduct(productInfo, path).then(data => {
            let that = this.$f7
            this.$f7.alert('保存成功！', function() {
              that.mainView.router.back()
            })
          }, () => {
            this.$f7.alert('保存失败！')
          })
        } else {
          this.$f7.alert('请您完善信息！')
        }
      }
      /* uploadpic(e){
        var self = this
        console.log(e.target)
        let file = e.target.files[0]
        let param = new FormData()  // 创建form对象
        param.append('file', file, file.name)  // 通过append向form对象添加数据
        param.append('chunk', '0') // 添加form表单中其他数据
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
      } */
		},
		components:{
			
		}
		
		
		
	}
	
	
	
</script>

<style lang="less" scoped>
 .cpgl-view {
   .btn {
     background-color: #e21945;
     width: 100%;
     height: 60px;
     float: right; 
     text-align: center; 
     font-size: 20px;
     line-height: 50px;
   }
 }
</style>