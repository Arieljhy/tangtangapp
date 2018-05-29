<template>
	
<!--<f7-view class="profile-view">-->
  <f7-page class="nickname-page">
  	
    <f7-navbar title="昵称" back-link="返回" theme="white" sliding>
    	<f7-nav-right>
			    <f7-button @click.native="subtoback()">确定</f7-button>
			  </f7-nav-right>
    </f7-navbar>
    <f7-list style="margin-top:50px">
        
        <f7-list-item type=textarea>
        	<f7-input type="text" placeholder="" ></f7-input>
        	</f7-list-item>
    </f7-list>
   
     
  </f7-page>
 <!-- </f7-view>-->
</template>

<style lang="less">
    .profile-page{
        .list-block{
            margin: 20px 0;
            .avatar-content{
                .item-after{
                    max-height: inherit;
                }
                .avatar{
                    width: 65px;
                    height: 65px;
                    border-radius: 5px;
                }
            }
        }
    }
</style>

<script>
import {mapState} from 'vuex'
export default {
	data(){
		return{
		nickname: 'Ariel'	
			
		}
	},
  computed: {
    ...mapState({
      userInfo: state => state.user,
    })
  },
  methods: {
    formatGender(gender) {
      if(gender === 'm') return this.$t('app.male')
      else if(gender === 'f') return this.$t('app.female')
      else return this.$t('app.unknown')
    },
    subtoback () {
    	this.$f7.mainView.router.load(
    		{
    			url: '/nickname/',
    			context:{
			    }
    		})
	 	}
  }
}
</script>