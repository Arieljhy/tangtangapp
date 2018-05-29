<template>
   
    	<f7-page class="order-view" toolbar-fixed navbar-fixed>
		 <f7-navbar title="我的订单" back-link="返回" sliding   theme='white'></f7-navbar>	
       
        </f7-page>
    
</template>

<style lang="less">
    .order-view{
        .tabs{
            padding-top: 44px;
        }
        .subnavbar{
            padding: 0px;
            .buttons-row{
                height: 44px;
                line-height: 44px;
                .button{
                    border-radius: 0px;
                    border: none;
                    height: 44px;
                    line-height: 44px;
                    color: #98d13e;
                }
                .button.active{
                    background: #98d13e;
                    color: #fff;
                }
            }
        }
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
    }
</style>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user,
    })
  }
}
</script>