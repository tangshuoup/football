<template>
	
	<div class="header">
		<div class="header-wrapper">
			<span class="el-icon-menu" @click="toggleMask"></span>
			<div class="switchover">
							
			</div>
		</div>
		<div class="mask" v-show="maskShow">
			<div class="mask-content">
				<div class="img-warpper">
					<img src="" alt="">
				</div>
				<div class="name"></div>
				<div class="intro"></div>
				<ul>
					<li @click="navTab(i)" v-for="(item, i) in tabList" class="li-item">{{item}}</li>
				</ul>
			</div>
		</div>
	<div class="shade" v-show="maskShow" @click="toggleMask"></div>
	</div>
	

</template>
<script>
	export default {
		name: 'header',		
		data() {
			return {
				maskShow: false,
				tabList: ['足球现场', '足球生活', '足球美女']
			}		
		},
		methods: {
			toggleMask() {
				this.maskShow = !this.maskShow;
			},
			navTab(index) {			
				// Hub.$emit('tab', index);
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
.header{
	position: relative;
	.header-wrapper{
		width: 100%;
		overflow: hidden;	
		background: #0cc440;
	  	.el-icon-menu{
	  	  padding: 0.34rem;          
          font-size: 0.32rem;
          color: #ffffff;
          float: left;      
      	}
      	.switchover{
      		font-size: 0;   
          	float: left;
          	.host-pot, .attention{
          	display: inline-block;
          	font-size: 0.26rem;
          } 
		}
	}
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 3.58rem;
		height: 100%;
		background: rgba(26,54,29,0.6);
		z-index: 10;
		.li-item{
			font-size: 0.26rem;
			color: #fff;
		}
	}
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
		z-index: 9;
	}
}


</style>
