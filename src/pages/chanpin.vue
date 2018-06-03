<template>
<!--<f7-page class="chanpin-view">-->
	<div class="chanpin-view">
    	<f7-searchbar
        cancel-link="取消"
        placeholder="血糖仪"
        :clear-button="true"
          	@searchbar:search="onSearch"
		    @searchbar:enable="onEnable"
		    @searchbar:disable="onDisable"
		    @searchbar:clear="onClear"
      ></f7-searchbar>
      
      
    
      <f7-grid no-gutter>
		  <f7-col width="50" v-for="(item, index) in dataList" :key="index" @click.native="goDetail(item.id)">
		  	<div>
		  		<img :src="item.proPic" alt=""    style="width: 100%; height: 100%;"/>
		  		<span class="itemTitle">名称:{{item.name}}</span>
		  		<span class="itemTitle">价格：{{item.price}}</span>
		  		<span class="itemTitle">简介：{{item.proTitle}}</span>
		  	</div>
		  </f7-col>
		</f7-grid>
      
    
</div>
<!-- </f7-page>-->
</template>

<style lang="less">
  @import "../assets/styles/mixins.less";
  .chanpin-view{
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

<style lang="less" scoped>
.chanpin-view {
  .itemTitle {
    color: black;
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: left;
    width: 100%;
    font-size: 0.2rem;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

<script>
import {mapState} from 'vuex'
import {requestAPI} from '../network/index.js'
export default {
	data () {
		return {
			dataList: []
		}
	},
  computed: {
    ...mapState({
      timeline: state => state.timeline
    })
  },
  mounted() {
    this.getList()
    this.$nextTick(_ => {
      this.$f7.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationType: 'bullets',
        direction: 'horizontal',
        loop: true,
        autoplay: 1500
      })
      // this.$f7.showIndicator()
      // this.$store.dispatch('getTimeline', () => {
      //   this.$f7.hideIndicator()
      // })
    })
  },
  methods: {
    routeToPost (data) {
      this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    },
    goDetail (id) {
    	this.$f7.mainView.router.load(
    		{
    			url: '/cp_detail/',
			    context:{
			        id: id
			    }
    		})
    },
    getList () {
      requestAPI.getProductList('1').then(data => {
        if (data) {
          let dataList = data.content
          if (dataList.length > 0) {
            for (let i = 0; i < dataList.length; i++) {
              dataList[i].proPic = 'https://image.dnurse.com/shop/U1521618874323.jpg'
            }
          }
          this.dataList = dataList
        }
      })
    },
    onSearch (query, found) {
      console.log('search', query)
    },
    onClear (event) {
      console.log('clear')
    },
    onEnable (event) {
      console.log('enable')
    },
    onDisable (event) {
      console.log('disable')
    }
  },
  components: {
  } 
}
</script>