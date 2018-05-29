<template>
	
	<f7-page toolbar-fixed navbar-fixed>
          	 <f7-navbar theme="white">
					<f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>				
	        </f7-navbar>
						
						<f7-toolbar tabbar bottom>
			              <f7-link   tab-link="#manager" active>
			              	
			              	<img src="../../assets/img/manager/m-main/gl.png" style="align-content: width:20px; height: 20px;" /><span> 管理</span>
			              </f7-link>
			              
			              
			              <f7-link  tab-link="#member" >
			              	<img src="../../assets/img/toolbar/wd.png" style="align-content: width:20px; height: 20px;" /><span> 我的</span>
			              </f7-link>
			            </f7-toolbar>
			            
						<f7-tabs>
							<f7-tab id="manager" active @tab:show="tabActived('manager')">
					<manager-view></manager-view>			
							</f7-tab>
							
							<f7-tab id="member" @tab:show="tabActived('mmember')">
					<mmember-view></mmember-view>			
							</f7-tab>
						</f7-tabs>
					</f7-page>

    <!-- Comment, publisher Popup -->


</template>

<script>
import managerView from '../mview/manager.vue'

import mmemberView from '../mview/m_member.vue'
export default {
  data() {
    return {
      activedTab: 'manager'
    }
  },
  computed: {
    navbarTitle() {
      switch(this.activedTab) {
      case 'manager':
        return '管理'
      
      case 'mmember':
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
    managerView,
    mmemberView
    
  }
}
</script>