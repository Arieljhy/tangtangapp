<template>
 <div class="member-pages">
<!--    		
    	<f7-page class="member-pages">
    		-->
    		
        <f7-list class="user-profile">
            <f7-list-item link="/umain/member/profile/" :media="avatarMedia">
                <div slot="inner-start" class="detail">
                    <div class="name">{{userInfo.nickName}}</div>
                    <div class="location">
                        <span>{{$t('app.city')}}: </span>
                        <span>{{userInfo.location}}</span>
                    </div>
                </div>
            </f7-list-item>
        </f7-list>
        
        <f7-grid no-gutter class="check-list">
       
        <f7-col  class="check-item" width="25" style="display: block;">
            <f7-link href="/dfk/" style=" display: inline-block; margin: 10px;">
            	 <div style="width: 100%; height:30px;" >
            		<img src="../assets/img/Mcenter/dfk.png" style=" display: inline-block;   width: 30px; height: 30px;" /> 
 				</div>
 				<span style=" display: inline-block; font-size: 5px;"> 待确认</span>
            </f7-link>
        </f7-col>
        
        
        
       <f7-col  class="check-item" width="25" style="display: block;">
            <f7-link href="/dfh/" style=" display: inline-block; margin: 10px;">
            	 <div style="width: 100%; height: 30px;" >
            		<img src="../assets/img/Mcenter/dfh.png" style=" display: inline-block;   width: 30px; height: 30px;" /> 
 				</div>
 				<span style=" display: inline-block; font-size: 5px;"> 待发货</span>
            </f7-link>
        </f7-col>
        
        
        <f7-col  class="check-item" width="25" style="display: block;">
            <f7-link href="/dsh/" style=" display: inline-block; margin: 10px;">
            	 <div style="width: 100%; height: 30px;" >
            		<img src="../assets/img/Mcenter/dsh.png" style=" display: inline-block;   width:30px; height: 30px;" /> 
 				</div>
 				<span style=" display: inline-block; font-size: 5px;"> 待收货</span>
            </f7-link>
        </f7-col>
        
        
        <f7-col  class="check-item" width="25" style="display: block;">
            <f7-link href="/gwc/" style=" display: inline-block; margin: 10px;">
            	 <div style="width: 100%; height: 30px;" >
            		<img src="../assets/img/Mcenter/gwc.png" style=" display: inline-block;   width: 30px; height: 30px;" /> 
 				</div>
 				<span style=" display: inline-block; font-size: 5px;"> 购物车</span>
            </f7-link>
        </f7-col>
        
        
        
      </f7-grid>
       
        <f7-list>
            <f7-list-item title="全部订单" link="/qbdd/"media="<i class='iconfont icon-language'></i>" ></f7-list-item>
        </f7-list>
        
        <f7-list>
            <f7-list-item :title="$t('app.address')" link="/member/address/" media="<i class='iconfont icon-language'></i>"></f7-list-item>
        </f7-list>
        
        <f7-list>
            <f7-list-item :title="$t('app.feedback')" link="/feedback/" media="<i class='iconfont icon-feedback2'></i>"></f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item :title="$t('app.about')" link="/about/" media="<i class='iconfont icon-about1'></i>"></f7-list-item>
        </f7-list>
              
     <!--</f7-page> -->    
</div>
</template>

<style lang="less">
    .member-pages{
        .list-block{
            margin: 20px 0;
            .iconfont{
                height: 29px;
            }
            .icon-language{
                color: #0099FF;
            }
            .icon-feedback2{
                color: #00CC99;
            }
            .icon-about1{
                color: #FFCC33;
            }
        }
        .user-profile{
            .item-content{
                padding-top: 5px;
                padding-bottom: 5px;
            }
            .avatar{
                width: 65px;
                height: 65px;
                border-radius: 5px;
            }
            .detail{
                .location{
                    color: #858585;
                    font-size: 15px;
                    margin-top: 5px;
                }
            }
        }
        .check-list{
      .check-item{
        text-align: center;
        background-color: white;
        
        height: 80px;
        line-height: 40px;
        border-radius: 4px;
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
    }),
    avatarMedia() {
      return `<img class='avatar' src='${this.userInfo.avatarUrl}' />`
    }
  }
}
</script>