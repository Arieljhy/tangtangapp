<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    
    
    <!-- Left Panel -->
    <f7-panel left reveal >
      <f7-view url="/panel-leftu/" id="left-panel-view" navbar-through :dynamic-navbar="true"></f7-view>
    </f7-panel>
    
        <!-- Left Panel -->
        <f7-panel left reveal :layout="theme" :theme="color">
            <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar title="糖糖" sliding></f7-navbar>
                
                <f7-pages>
                    <f7-page style="margin-top: 0px;">
                       <f7-list>           
                            <f7-list-item link="/form/" title="Form" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                                          
                            <f7-list-item link="/login/" title="登录" link-view="#main-view"
                                          link-close-panel></f7-list-item>              
                                          
                            
                            <f7-list-item link="/set/" title="个人设置" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                                          
                                          
                            <f7-list-item link="/order/" title="我的订单" link-view="#main-view"
                                          link-close-panel></f7-list-item>

                        </f7-list>
                        
                       
                        <f7-list>
                            <f7-button raised @click="logout" text="退出登录" link="/main/" style="background-color: #e21945; border: none;color: white;"></f7-button>
                        </f7-list>
                            
                        
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
    
    

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
      	
      	
      	
        <f7-navbar theme="white">
          <f7-nav-left>
						<f7-link icon="icon-bars" open-panel="left"></f7-link>
					</f7-nav-left>
					<f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>
		
					</f7-nav-right>
        </f7-navbar>
        
        
        
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
						
						<f7-toolbar tabbar bottom>
			              <f7-link   tab-link="#home" active>
			              	
			              	<img src="./assets/img/toolbar/sy.png" style="align-content: width:20px; height: 20px;" /><span> 首页</span>
			              </f7-link>
			              
			              <f7-link  tab-link="#txy">
			              	<img src="./assets/img/toolbar/txy.png" style="align-content: width:20px; height: 20px;" /><span> 糖学院</span>
			              </f7-link>
			              <f7-link  tab-link="#yaofang">
			              	<img src="./assets/img/toolbar/yf.png" style="align-content: width:20px; height: 20px;" /><span> 药房</span>
			              </f7-link>
			              <f7-link  tab-link="#member" >
			              	<img src="./assets/img/toolbar/wd.png" style="align-content: width:20px; height: 20px;" /><span> 我的</span>
			              </f7-link>
			            </f7-toolbar>
			            
						<f7-tabs>
							<f7-tab id="home" active @tab:show="tabActived('home')">
								<home-view></home-view>
							</f7-tab>
							<f7-tab id="txy" @tab:show="tabActived('txy')">
								<txy-view></txy-view>
							</f7-tab>
							<f7-tab id="yaofang" @tab:show="tabActived('yaofang')">
								<yaofang-view></yaofang-view>
							</f7-tab>
							<f7-tab id="member" @tab:show="tabActived('member')">
								<member-view></member-view>
							</f7-tab>
						</f7-tabs>
					</f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Comment, publisher Popup -->

  </div>
</template>

<script>
import HomeView from './pages/home.vue'
import TxyView from './pages/txy.vue'
import YfView from './pages/yaofang.vue'
import MemberView from './pages/member.vue'

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
        return this.$t('app.app_name')
      case 'txy':
        return this.$t('app.txy')
      case 'yaofang':
        return this.$t('app.yaofang')
      case 'member':
        return this.$t('app.member')
      }
    }
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab
    }  
  },
  components: {
    HomeView,
    TxyView,
    YfView,
    MemberView
  }
}
</script>