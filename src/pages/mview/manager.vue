<template>
	<div class="manager-view">
		<f7-grid no-gutter>

			<f7-col width="50" class="colimg"  @click.native="cpgl()">
                <a>
					<img src="../../assets/img/manager/m-main/m/spgl.png" />	
                 </a>
			</f7-col>


			<f7-col width="50" class="colimg" @click.native="ddgl()" >
			<a>
			<img src="../../assets/img/manager/m-main/m/ddgl.png" />	
			 </a>
			</f7-col>



			<f7-col width="50" class="colimg"@click.native="xxgl()">

				<img src="../../assets/img/manager/m-main/m/khgl.png" />

			</f7-col>



			<f7-col width="50" class="colimg" @click.native="cpgl()">

				<img src="../../assets/img/manager/m-main/m/zjgl.png" />

			</f7-col>


		</f7-grid>

	</div>
</template>

<script>
	export default{
		data(){	
			return{
				id:''
			}
		},
		mounted(){
		},
		methods:{
			cpgl() {
			    	this.$f7.mainView.router.load(
			    		{
			    			url: '/cpgl/'
			    		})
    				},
    		ddgl() {
			    	this.$f7.mainView.router.load(
			    		{
			    			url: '/ddgl/'
			    		})
    				},
    		xxgl() {
			    	this.$f7.mainView.router.load(
			    		{
			    			url: '/xxgl/'
			    		})
    				}		
		}
		
		
		
	}
	
	
	
</script>

<style>
	.manager-view {
		background-color: white;
	}
	
	.colimg {
		width: 45%;
		border: blanchedalmond;
		text-align: center;
		line-height: 50px;
		img {
			width: 50px;
			height: 50px;
			display: inline-block;
		}
	}
</style>