<template>
	<div class="attention-wrapper" ref="attention">
		<ul ref="ul">
			<li v-for="item in attention" class="item-list">
				<div class="top">
					<img :src="item.author.avatar" alt="">
					<div class="name-warpper">
						<span class="name">{{item.author.name}}</span>
						<span class="signature">{{item.content}}</span>
						<div class="like">
							<span class="count">{{item.useful_count}}</span>
							<span class="iconfont icon-unie60b"></span>
						</div>
					</div>
				</div>
				<div class="bottom">
					<img src="" alt="">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	const ERR_OK= 200;
	export default {
		data() {
			return {
				attention: {},
				showLoading: true,
				count: 20			
			}
		},
		created() {
			this.$http.get('/api/v2/movie/subject/26865690/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count='+this.count+'&client=&udid=')
			.then((response) => {
				if (response.status === ERR_OK) {
                  this.attention = response.data.comments;
                  this.$nextTick(() => {                  	          		             
	                 if (!this.scroll) {
		                this.scroll = new BScroll(this.$refs.attention, {		     
		                  		click: true
		                	})
			             } else {
			                this.scroll.refresh();
			             }	          	                		
		   			})                                                            
                }
			})
		},
		methods: {
			show() {
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.attention, {
							click: true
						})
					} else {
						this.scroll.refresh();
					}
				})
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
.attention-wrapper{
	height: 9rem;
	.item-list{
		.top{
			display: flex;
			position: relative;
			img{
				display: block;
				padding: 0.2rem;				
				width: 0.94rem;
				height: 0.94rem;
				border-radius: 50%;
			}
			.name-warpper{	
				text-align: left;			
				.name{
					display: block;
					margin: 0.3rem 0;
					font-size: 0.28rem;
					color:rgb(70,70,70);
				}
				.signature{
					display: block;
					font-size: 0.22rem;
					color:rgb(153,153,153);
				}
			}
			.like{
				position: absolute;
				line-height: 0.3rem;
				top: 0;
				right: 0.25rem;
				.count{
					font-size: 0.2rem;
					color:rgb(153,153,153); 
				}
			}
		}
	}
}
</style>
