<template>
	
<!--<f7-view class="profile-view">-->
  <f7-page class="profile-page">
  	
    <f7-navbar title="个人信息" back-link="返回" theme="white" sliding></f7-navbar>
    <f7-list style="margin-top:50px">
        <f7-list-item title="头像" class="avatar-content">
            <img class="avatar" slot="after" :src="userInfo.avatarUrl"/>
        </f7-list-item>
        <f7-list-item title="昵称" :after="userInfo.nickName" link="/nickname/"></f7-list-item>
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
    }
  }
}
</script>