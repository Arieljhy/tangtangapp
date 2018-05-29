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
		  		<img :src="item.img" alt=""    style="width: 100%; height: 100%;"/>
		  		<span style="color: red;">{{item.price}}</span>
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

<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			dataList: [
				{
					price: '20元',
					img: 'https://image.dnurse.com/shop/U1521618874323.jpg',
					id: '1'
				}
			]
		}
	},
  computed: {
    ...mapState({
      timeline: state => state.timeline
    })
    },
  mounted() {
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