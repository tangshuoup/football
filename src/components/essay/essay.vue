<template>
<div class="essay" ref="essayScroll">
	<div class="scroll-wrapper">
		<div class="head-top">
		<i class="iconfont icon-iconfontxiangzuojiantou" @click="hide"></i>
			短评 - {{title}}
		</div>
		<span class="title">
			<i class="iconfont icon-liuyan"></i>
			热门评论
		</span>
		<div class="review-wrapper">
			<div class="review-hctms" v-for="item in commentList.hcmts">
				<review :item="item"></review>
			</div>			
		</div>
		<span class="title">
			<i class="iconfont icon-liuyan"></i>
			最新评论
		</span>
		<div class="review-wrapper">
			<div class="review-hctms" v-for="item in commentList.cmts">
				<review :item="item"></review>
			</div>			
		</div>
		<div class="review-wrapper">
			<div class="review-hctms" v-for="item in loadList">
				<review :item="item"></review>
			</div>			
		</div>
		<div class="add-in" @click="loadMore">
			{{this.addIn?'点击加载更多':'正在加载中...'}}
		</div>		
	</div>
</div>	
</template>
<script>
import review from '../review/review'
import BScroll from 'better-scroll'
const ERR_OK = 200;
	export default {
		data() {
			return {
				addIn: true,
				id: this.$route.query.id,
				offsetNum: 0,
				limitNum: 0,
				loadList: {},
				loadListNow: []
			}
		},
		props: {
			title: {
				type: String
			},
			commentList: {
				type: Object
			}
		},
		mounted() {		   
			this.$nextTick(() => {	   		
	    		this._initScroll();
	    	})
		},
		methods: {
			hide(event) {
				if (!event._constructed) {
          			return;
        	}       		
				this.$router.go(-1)
			},
			loadMore() {
				this.addIn = false
				this.offsetNum +=5;
				this.limitNum +=5;
				this.$http.get('/api/comments.json?movieid='+this.id+'&limit='+this.limitNum+'&offset='+this.offsetNum+'').then((response) => {   
		         if (response.status === ERR_OK) {   		               		
		                this.loadList = response.data.data.CommentResponseModel.cmts		               
                        this.$nextTick(() => {	   		
				    		this._initScroll();
				    		this.addIn = true
				    	})	               		                                           
		            }
	  			});    
			},
			_initScroll() {                      
                  if (!this.scroll) {
			  			this.scroll = new BScroll(this.$refs.essayScroll, {
			  				click: true
			  			});
			  		} else {		
			  			console.log(1);	  			
			  			this.scroll.refresh();
	  			}
            }
		},
		components: {
			review
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
.essay{
	position: fixed;
	background-color: #fff;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 300;
	text-align: left;
	.head-top{
		height: 0.76rem;
		background-color: #e54847;
		line-height: 0.76rem;
		color: #fff;
		font-size: 0.32rem;
		text-align: center;
		.icon-iconfontxiangzuojiantou{
			color: #fff;
			position: absolute;
			left: 0;
		}
	}
	.title{
		display: inline-block;
		padding: 0.06rem;
		background-color: #e54847;
		margin: 0.3rem 0 0.3rem 0.3rem;
		color: #fff;

	}
	.add-in{
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: center;
	}
}
	
</style>
