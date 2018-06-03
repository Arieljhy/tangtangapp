<template>
    <div class="txy-view">
    	
     <!-- <f7-page  class="txy-pages">-->
      <f7-swiper pagination>
        <f7-swiper-slide>
        <img src="../assets/img/txy/txy1.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/txy/txy2.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/txy/txy3.png"/>
        </f7-swiper-slide>
      </f7-swiper>
          
        </f7-list-group>
		  <f7-list-group  class="goods-group">
		    <f7-list-item title="医学前沿" group-title></f7-list-item>
          
			          <li class="item-content goods-item" v-for="item in dataList" :key="item.id">
				              <div class="item-media">
				                <img class="post-img" :src="item.pic" alt="logo">
				              </div>
				              <div class="item-inner">
				                  <div class="item-title">{{item.subject}}</div>
				                 </div>
				          </li>
		  </f7-list-group>
      </f7-list>
     <!-- </f7-page>-->
	</div>
</template>

<style lang="less">
  @import "../assets/styles/mixins.less";
  .txy-view{
    .swiper-container {
      height: 140px;
    }
    .swiper-slide {
      background:#fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:20px;
      font-size:21px;
    }
    .menu-list{
      .menu-item{
        text-align: center;
        border: 0.5px solid #ccc;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
      }
    }
    .goods-group-list{
      .goods-group{
        .goods-item{
          .post-img{
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
</style>



<script>
//import Topics from '../components/topics.vue'
import { requestAPI } from '../network/index.js'

const limit = 10
let page = 1
export default {
	data () {
    	return {
    		dataList: []
    	}
   },
	mounted () {
      let params = 'cid=38&page=1&page_size=10'
      requestAPI.testRequest(params).then(data => {
      	setTimeout(() => {
      		this.dataList = data.d.list
      	}, 300)
      	
      	console.log(this.dataList)
      })
	}
}
</script>