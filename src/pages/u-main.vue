<template>
	<f7-page  toolbar-fixed navbar-fixed>
 		
	        <f7-navbar theme="white">
	         <f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
						</f7-nav-left>
						<f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>
						</f7-nav-right>
	        </f7-navbar>
	        
	        
	        
			<f7-toolbar tabbar bottom>
			              <f7-link   tab-link="#home" active>
			              	
			              	<img src="../assets/img/toolbar/sy.png" style="align-content: width:20px; height: 20px;" /><span> 首页</span>
			              </f7-link>
			              
			              <f7-link  tab-link="#txy">
			              	<img src="../assets/img/toolbar/txy.png" style="align-content: width:20px; height: 20px;" /><span> 糖学院</span>
			              </f7-link>
			              <f7-link  tab-link="#chanpin">
			              	<img src="../assets/img/toolbar/yf.png" style="align-content: width:20px; height: 20px;" /><span> 产品</span>
			              </f7-link>
			              <f7-link  tab-link="#member" >
			              	<img src="../assets/img/toolbar/wd.png" style="align-content: width:20px; height: 20px;" /><span> 我的</span>
			              </f7-link>
			            </f7-toolbar>
			            
						<f7-tabs>
							<f7-tab id="home" active @tab:show="tabActived('home')">
								<home-view></home-view>
							</f7-tab>
							<f7-tab id="txy" @tab:show="tabActived('txy')">
								<txy-view></txy-view>
							</f7-tab>
							<f7-tab id="chanpin" @tab:show="tabActived('chanpin')">
								<cp-view></cp-view>
							</f7-tab>
							<f7-tab id="member" @tab:show="tabActived('member')">
								<member-view></member-view>
							</f7-tab>
						</f7-tabs>
						
						
	</f7-page>

    <!-- Comment, publisher Popup -->

</template>

<script>
import homeView from '../pages/home.vue'
import txyView from '../pages/txy.vue'
import cpView from '../pages/chanpin.vue'
import memberView from '../pages/member.vue'


export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {
    navbarTitle() {
      switch(this.activedTab) {
      case 'home':
        return '首页'
      case 'txy':
        return '糖学院'
      case 'chanpin':
        return '产品'
      case 'member':
        return '我的'
      }
    }
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab
    }  
  },
  components: {
    homeView,
    txyView,
    cpView,
    memberView
  }
}
</script>