<template>
		<f7-page class="ddgl-view">
		 <f7-navbar title="订单管理" back-link="返回" theme="white" sliding></f7-navbar>
		
		
		 <f7-subnavbar style="margin-top: 40px;">
          <f7-buttons color="red">
            <f7-button tab-link="#unpayed" active>待处理订单</f7-button>
            
            <f7-button tab-link="#finished">已处理订单</f7-button>
            <f7-button tab-link="#all">全部订单</f7-button>
          </f7-buttons>
        </f7-subnavbar>

        
        <f7-tabs style="margin-top: 10px;">
          <f7-tab id="unpayed" active>
          <dclorder-view></dclorder-view>
          </f7-tab>
          <f7-tab id="finished">
          <yclorder-view></yclorder-view>
          </f7-tab>
          <f7-tab id="all">
          <mqbdd-view></mqbdd-view>
          </f7-tab>
        </f7-tabs>
		

	</f7-page>
		
	
</template>

<script>
import dclorderView from './dclorder.vue'
import yclorderView from './yclorder.vue'
import mqbddView from './m_qbdd.vue'
export default{
	data(){
		return {}
	},
	components:{
		dclorderView,
		yclorderView,
		mqbddView
	}
}
	
</script>

<style>
	 .dddgl-view{
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