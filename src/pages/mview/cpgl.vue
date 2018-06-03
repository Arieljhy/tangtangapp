<template>
	<f7-page>
		<f7-navbar title="产品管理" back-link="返回" theme="white" sliding style="text-align: center;">
			 <f7-nav-right>
			    <f7-button @click="editList">{{editTitle}}</f7-button>
			  </f7-nav-right>
		</f7-navbar>
		
		<f7-list form v-show="checkShow">
		  <f7-list-item checkbox  name="dataCheck" v-for="(item, index) in dataList" :key="index" :value="index" :title="item.name">
		  </f7-list-item>
		  <f7-list-item>
		  	<f7-button raised style="margin-top: 30px; border-color:#e21945 ;color: #e21945;width: 30%; float: right;" @click="del">删除</f7-button>
		  </f7-list-item>
		</f7-list>
	
		
		
		
		<f7-list form v-show="!checkShow">	
      <f7-list-item  name="dataList" v-for="(item, index) in dataList" :key="index" :value="index" :title="item.name" @click="toaddcp(item.id)">
		  </f7-list-item>
		</f7-list>
		
		<!--@click="selectAll" -->
		
		<f7-toolbar style="height: 80px;" >
		<f7-button fill class="mcpbutton" style="background-color: #e21945;" @click.native="toaddcp('null')"> 
			     添加商品</f7-button>
			     
		<f7-button raised  class="mcpbutton"  style="color:#e21945 ; border:1px solid #e21945;"  @click="editAllList"> 
			     批量管理</f7-button>	     
        </f7-toolbar>
	</f7-page>
</template>

<script>
  import {requestAPI} from '../../network/index.js'
	export default {
    data () {
      return {
        dataList: [],
        xx: false,
        checkShow: false,
        editTitle: '编辑',
        titleList: ''
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      // 新增商品
      toaddcp (id) {
        this.$f7.mainView.router.load(
          {
            url: '/addcp/',
            context:{
              id: id
            }
          })
      },
      // 獲取商品列表
      getList () {
        requestAPI.getProductList('').then(data => {
          if (data) {
            this.dataList = data.content
          }
        })
      },
      // 批量刪除
      del () {
        let checkData = document.getElementsByName('dataCheck')
        if (checkData.length > 0) {
          let arr = []
          for (let i = 0; i < checkData.length; i++) {
            console.log(checkData[i].checked)
            if (checkData[i].checked === true) {
              arr.push(this.dataList[i].id)
            }
          }
          requestAPI.delProduct(arr).then(data => {
            let that = this
            this.$f7.alert('删除成功！', function() {
              this.checkShow = false
              this.editTitle = this.checkShow ? '取消':'编辑'
              that.getList()
            })
          }, () => {
            this.$f7.alert('删除失败！')
          })
        }
      },
      // 批量管理
      editAllList () {
        if (!this.checkShow) {
          this.checkShow = !this.checkShow
          this.editTitle = this.checkShow ? '取消':'编辑'
        }
        let checkData = document.getElementsByName('dataCheck')
        if (checkData.length > 0) {
          for (let i = 0; i < checkData.length; i++) {
            checkData[i].checked = true
          }
        }
      },
      // 点击编辑
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