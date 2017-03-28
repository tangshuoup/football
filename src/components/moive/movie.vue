<template>
<div class="movie-wrapper">
<div class="movie" ref="movie">
	<div class="movieScroll">
		<section class="top">
			<span class="back icon-iconfontxiangzuojiantou iconfont" @click="backHistory"></span>
			<span class="title">{{movieList.nm}}</span>
		</section>
		<section class="details">
			<img :src="movieList.img" class="bg-blur">
			<div class="movie-blur"></div>
			<div class="film-box">
			<div class="img-wrapper">
				<img :src="movieList.img">
			</div>
			<div class="film">
				<div class="title">
					<p class="name">{{movieList.nm}}</p>
					<p class="english"></p>
				</div>
				<div class="grade">
					<div class="left">
						<span>电影评分{{movieList.sc}}</span>
					</div>
					<div class="right">
						<span>({{movieList.snum}}人评分)</span>
					</div>
				</div>
				<div class="want">
					{{movieList.wish}}人想看
				</div>
				<div class="story">
					<span >{{movieList.cat}}</span>
				</div>
				<div class="site">
					<span>{{movieList.src}}</span>
				</div>
				<div class="time">
					<span>{{movieList.dur}}分钟</span>
				</div>
				<div class="show">
					<span>{{movieList.rt}}</span>
				</div>
			</div>
			</div>
		</section>
		<section class="synopsis">
			<div class="buy-ticket">立即购票</div>
			<div class="text" v-html="movieList.dra" :class="hidden? 'min-height' : 'max-height'">
				
			</div>
			<div class="hidden" @click="toggleHidden">
				<i class="iconfont" :class="hidden?'icon-30' : 'icon-xiangshang'"></i>
			</div>
		</section>
		<section class="movie-actor" ref="movieActor">
			<ul class="actor-wrapper" ref="actorWrapper">
				<li v-for="item in movieList.photos" class="actor-item">
					<img :src="item | delUrl" alt="">					
				</li>
			</ul>
		</section>
		<section class="review">
			<div class="title">
					短评
			</div>
			<div v-for="item in commentList.hcmts">
				<review :item="item"></review>
			</div>
			 <router-link :to="{ path:'/index/movieDetial/essay', query: { id: id }}">  
				<div class="load-more">
					查看全部{{commentList.total}}条短评
				</div>
			</router-link>		
		</section>		
	</div>
</div>
<loading v-show="showLoading"></loading>
	<transition name="router-slid" mode="out-in">
			<router-view :title="movieList.nm" :commentList="commentList"></router-view>
		</transition>
</div>
</template>
<script>
import loading from '../loading/loading'
import review from '../review/review'
import BScroll from 'better-scroll'
const ERR_OK = 200;
	export default {
	   data() {
	   		return {	   		
	   			 id: this.$route.query.id,
	   			 movieList: {},
	   			 commentList: {},
	   			 showLoading: true,
	   			 hidden: true	   			 
	   		}	   			   		
	   },
	   created() {
   		this.$http.get('/api/movie/'+this.id+'.json').then((response) => {   
         if (response.status === ERR_OK) {   
                this.movieList = response.data.data.MovieDetailModel; 
                this.commentList = response.data.data.CommentResponseModel;                             
                this.$nextTick(() => {                	 
                	this._initScroll();                	
                this.showLoading = false;                                     
              })                                    
            }
      	});    
	   },
	   watch: {
	   		movieList() {
	   			this.$nextTick(() => {
	    			// this._initPics();	    			
	    			this._initScroll();
	    		})
	   		}
	   },
	    mounted() {	    	
	    		// this._initPics();	    
	    		this._initScroll();	    			    	
	    },
        methods: {
        	backHistory(event) {
        	if (!event._constructed) {
          		return;
        	}        	
        		this.$router.go(-1);
        	},
        	toggleHidden(event) {
	        	if (!event._constructed) {
	          			return;
	        	}
        		this.hidden = !this.hidden;
        		this.$nextTick(() => {
     	  			 this.scroll.refresh();
     	  		})
        	},
        	_initScroll() {                      
                  if (!this.scroll) {
			  			this.scroll = new BScroll(this.$refs.movie, {
			  					click: true
			  			});			  			
			  		} else {
			  			 this.scroll.refresh();			  			
	  			}
            },
       //      _initPics() {
       //      	if (this.movieList.photos) {
       //      		let picWidth = 60;
		  			// let margin = 10;
		  			// let width = (picWidth + margin)* this.movieList.photos.length - margin;
		  			// this.$refs.actorWrapper.style.width = width +'px';		  		
		  			// this.$nextTick(() => {
		     //        if (!this.picScroll) {
		     //          this.picScroll = new BScroll(this.$refs.movieActor, {
		     //            scrollX: true,
		     //            eventPassthrough: 'vertical'
		     //          });
		     //        } else {
		     //          this.picScroll.refresh();
		     //        }
       //    		 });
       //      	}
       //      },
            toggleEssay() {
            	this.$refs.essay.show();
            }
        },
        filters: {
        	 delUrl(url) {
        	 	let newUrl = url.replace('/w.h', '');
        	 	return newUrl;
        	 }
        },
        components: {	          	          
             loading,
             review                                          
	      }    
	}
</script>
<style rel="stylesheet/scss" lang="scss">
.movie-wrapper{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
	font-size: 14px;
	background: #f4f4f4;
}
.movie{
	width: 100%;
	height: 100%;
	.top{
		position: relative;
		top: 0;
		height: 0.76rem;
		background-color: #e54847 !important;
		display: flex;
		padding: 0.12rem;
		background: #fff;
		.back{
			margin-top: 0.2rem;
			width: 0.36rem;
			color: #fff;
		}
		.title{
			flex: 1;
		    color: #FFF;
		    font-size: 0.36rem;
		    text-align: center;
		    line-height: 2;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
	}
	.details{
		padding: 0.3rem;
		overflow: hidden;
	    position: relative;
	    box-sizing: border-box;
	    filter: blur(0);
		.bg-blur{
			top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    width: 100%;
		    z-index: 0;
		    position: absolute;
		    filter: blur(.6rem);
		    background-size: cover;
		    background-image: gray;
		    background-repeat: no-repeat;
		    background-position-y: 40%;		
		}
		.movie-blur{
			top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    width: 100%;
		    position: absolute;
		    background-color: #40454d;
		    opacity: .55;
		}
		.film-box{
		    z-index: 1;
		    position: relative;
			.img-wrapper{
				float: left;
				width: 1.8rem;
				height: 2.6rem;
				filter: blur(0);
			    border: solid 1px #f0f2f3;
			    position: relative;
			    background: #c1c1c1;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		.film{
			color: #fff;
			line-height: 1;
			float: left;
			margin-left: 0.2rem;
			.title,.grade,.story,.time,.show{
				margin-bottom: 0.2rem;
			}
			.grade{
				overflow: hidden;
				text-align: center;
				.left{
					float: left;
					color: #ffc600;
					margin-right: 0.1rem;
				}
				.right{
					float: left;
				}
			}
			.show,.time{
				span{
					display:inline-block;
				}
			}
		}
	}
	.synopsis{
		padding: 0.3rem 0.3rem 0 0.3rem;
		border-bottom: 1px solid #e5e5e5;
		background: #fff;
		.buy-ticket{
			font-size: 0.24rem;
			padding: 0.2rem;
			text-align: center;
			background: #e54847;
			border-radius: 0.08rem;
			color: #fff;
			cursor: pointer;
			margin-bottom: 0.2rem;
			line-height: 1;
		}
		.text{
			overflow: hidden;
			line-height: 0.4rem;
		}
		.min-height {
			max-height: 0.8rem;
		}
		.max-height {
			height: auto;
		}
	}
	.movie-actor{
		border-top: 1px solid #e5e5e5;
    	border-bottom: 1px solid #e5e5e5;
    	margin: 0.2rem 0;
    	width: 100%;
	   
	    // white-space: nowrap;
	    .actor-wrapper{
	    	width: 100%;
	    	padding: 0.3rem 0 0.1rem 0.3rem;
	    	overflow-x: scroll;
   			white-space: nowrap;
	    	.actor-item{
	    		display: inline-block;	    		
	    		margin-right: 0.1rem;
			    img{
		    		display: block;
		    		width: 1.1rem;
		    		height: 1.6rem;
		    	}
	    	}   	
	    }
	    
	}
	.review{
		.title{
			height: 0.8rem;
    		line-height: 0.8rem;
    		border-bottom: 1px solid #e5e5e5
		}
		.load-more{
			height: 0.8rem;
			line-height: 0.8rem;
			color:#e54847; 
		}
	}
	.fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .fade-choose-enter-active, .fade-choose-leave-active {
        transition: opacity .5s;
    }
    .fade-choose-leave, .fade-choose-leave-active {
        display: none;
    }
    .fade-choose-enter, .fade-choose-leave-active {
        opacity: 0;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }  
}
 
</style>
