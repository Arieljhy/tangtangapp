<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
     <!-- Left Panel -->
    <f7-panel left reveal :layout="theme" :theme="color">
      <f7-view url="/panel-leftu/" id="left-panel-view" navbar-through :dynamic-navbar="true"></f7-view>
    </f7-panel>
    
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" url="/" main>
      	
      </f7-view>
    </f7-views>

    <!-- Comment, publisher Popup -->

  </div>
</template>

<script>


export default {
	data () {
		return {
			theme: '',
			color: 'blue'
		}
	}
 
}
</script>