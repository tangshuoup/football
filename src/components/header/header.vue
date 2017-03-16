<template>	
	<div class="header">
		<div class="header-wrapper">
			<span class="iconfont icon-liebiao" @click="toggleMask"></span>
		</div>
		<transition name="router-fade" mode="out-in">		
			<div class="shade" v-show="maskShow" @click="toggleMask">				
				<div class="mask" @click.stop.prevent>
					<div class="mask-content">
						<div class="img-warpper">
							<img src="" alt="">
						</div>
						<div class="name"></div>
						<div class="intro"></div>
						<ul compact="tab-list">
							<li @click="navTab(i)" v-for="(item, i) in tabList" class="li-item border-1px">{{item}}</li>
						</ul>
					</div>
				</div>
			</div>		
		</transition>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
	export default {
		name: 'header',	
		data() {
			return {				
				maskShow: false,
				tabList: ['足球现场', '足球生活', '足球美女']				
			}		
		},
		methods: {
			...mapMutations([
			    'TOOGGLE_TAB'
			]),
			toggleMask() {
				this.maskShow = !this.maskShow;				
			},
			navTab(index) {
				this.toggleMask();												
			    this.$router.push('/index');
			    this.TOOGGLE_TAB(index);			    	
			}
		}
		
	}
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../../common/sass/mixin.scss';
.header{	
	width: 100%;
	.header-wrapper{
		width: 100%;
		height: 0.87rem;
		overflow: hidden;	
		background: #0cc440;
	  	.icon-liebiao{
	  	  padding-left: 0.32rem;
	  	  line-height: 0.87rem;        
          font-size: 0.23rem;
          color: #ffffff;
          float: left;      
      	}
      	
	}
	
			.shade{
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,0.4);
				z-index: 99;
				.mask{
					position: fixed;
					top: 0;
					left: 0;
					width: 3.58rem;
					height: 100%;
					background: rgba(26,54,29,0.6);
					z-index: 100;
				.li-item{
					padding:0.15rem 0;
					font-size: 0.26rem;
					color: #fff;
					@include border-1px(rgba(255,255,255,0.4));
				}
			}
		}
	
	.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  	}
  	.router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  	}
}


</style>
