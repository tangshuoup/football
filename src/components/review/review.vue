<template>
	<div class="review">			
			<div class="review-item">
				<div class="item-top">
					<div class="star">
						<span class="star-item" v-for="itemClass in itemClasses" :class="itemClass"></span>
					</div>
					<span class="time">{{item.time}}</span>
				</div>
				<div class="content">
					{{item.content}}
				</div>
				<div class="userinfo">
					<span class="head-img"><img :src="item.avatarurl" alt=""></span>
					<span class="name">{{item.nickName}}</span>
					<div class="right">
						<span>
						<i class="iconfont icon-unie60b"></i>
						{{item.approve}}
						</span>
						<span>
						<i class="iconfont icon-liuyan"></i>
						{{item.reply}}
						</span>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
const LENGTH=5;
const CLS_ON='on';
const CLS_HALF='half';
const CLS_OFF='off';
	export default {
		props: {
			item: {
				type: Object
			}
		},
		computed: {
			itemClasses() {
				let result=[];
				let score = Math.floor(this.item.score*2)/2;
				let hasDecimal = score % 1!==0;
				let integer = Math.floor(score);
				for (let i = 0; i < integer; i++) {
					result.push(CLS_ON);
				}
				if (hasDecimal) {
					result.push(CLS_HALF);
				}
				if (result.length < LENGTH) {
					result.push(CLS_OFF)
				}
				return result;
			}
		},
		mounted() {
			// console.log(this.item)
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss">
	.review{
		.review-item{
			padding: 0.2rem 0.25rem;
			border-bottom: 1px solid #e5e5e5;
			text-align: left;
			.item-top{
				.star{
					.star-item{
						display: inline-block;
						background-repeat: no-repeat;
						width: 0.2rem;
						height: 0.2rem;
						margin-right: 0.06rem;
						background-size: 0.2rem 0.2rem;
						&.on{
							background-image: url('images/star24_on@2x.png');
						}
						&.half{
							background-image: url('images/star24_half@2x.png');
						}
						&.off{
							background-image: url('images/star24_off@2x.png');
						}
					}
				}
			}
			.content{
				margin: 0.2rem 0;
				font-size: 0.24rem;
				line-height: 1.5;
			}
			.userinfo{
				.head-img{
					display: inline-block;
					vertical-align: middle;
					width: 0.58rem;
					img{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.name{
					vertical-align: middle;
					display:inline-block;
				}
				.right{
					float: right;
					line-height: 0.58rem;
				}
			}
		}
	}
</style>
