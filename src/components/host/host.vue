<template>
	 <div class="index-warpper">    
    		<nav class="nav border-1px">
	          <ul class="item">
	            <li @click="tab(i)" v-for="(item, i) in navList" class="item-list" :class="curIndex === i ? 'active':''">{{item}}</li>
	          </ul>
        	</nav>   
         <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper" ref="swiperWrapper">
                <div class="swiper-slide site" ref="site">             
                    <ul class="site-wrapper">
                      <li v-for="item in index" class="site-list">
                        <img :src="item.images.large" alt="">
                        <span class="title">{{item.title}}</span>
                      </li>           
                    </ul>         
                </div>
                <div class="swiper-slide">
                  足球生活
                </div>
                <div class="swiper-slide">
                  足球美女
                </div>          
            </div>
         </div>        
          <loading v-show="showLoading"></loading>      
      </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import loading from '../loading/loading'
const ERR_OK = 200;
	export default {
		data() {
      		return {             	
            	navList: ['足球现场', '足球生活', '足球美女'],
              index: {},
              showLoading: true            	                                                    
      		};
    	},
      created() {    
          this.$http.get('/api/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid=').then((response) => {                            
              if (response.status === ERR_OK) {            
                  this.index = response.data.subjects; 
                    this.$nextTick(() => {                                            
                    this._initScroll(); 
                    this.showLoading = false;                                     
              })                                    
                }
          });          
      },
       mounted() {
          let that=this;
          this.Swiper = new Swiper(this.$refs.swiperContainer, {
            onSlideChangeStart: function(swiper) {
                that.$store.state.tabIndex = swiper.activeIndex;           
              }
          })
       },     
    	computed: {
          curIndex() {
            return this.$store.state.tabIndex          
          }
      	},    	
      	watch: {
          curIndex() {            
              this.Swiper.slideTo(this.curIndex);                                                  
          }        
      	},
    	methods: {
	      	tab(index) {         
	          this.Swiper.slideTo(index);        
	        },
          _initScroll() {       
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.site, {
                           startY: 0,
                           startX: 0            
                  })
                } else {
                  this.scroll.refresh();
                }                
            }        	                
    		},
	       	components: {	          	          
             loading          
	      }    
		}
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../../common/sass/mixin';
.index-warpper{
      display: flex;
      flex-direction:column;
      height: 100%;
    .nav{    
     @include border-1px(rgb(217,217,217)); 
     box-sizing: border-box;    
     width: 100%;
     height: 0.7rem;
     background: #fff;
     flex-shrink:0;
      .item{
        width: 100%;
        height: 0.7rem;      
        display: flex;
        justify-content: space-around;
        .item-list{
          width: 33.3%;
          font-size: 0.3rem;
          color: #686868;
          text-align: center;
          line-height: 0.7rem;
          &.active{
            border-bottom: 4px solid #0cc440;
            color: #0cc440;
          }
        }
      }
    }
    .swiper-slide{
      width: 100%;
      height: 9rem;    
      flex:1;
      overflow: hidden; 
      .site-wrapper{
          display: flex;                                                                     
          flex-direction:row;
          flex-wrap: wrap;
          justify-content: space-between;
          .site-list{
            width: 3.14rem;
            border: 1px solid #E5E5E5;
            margin-bottom: 0.13rem;        
             &.site-list:nth-of-type(even){
                margin-right: 0;
             }
              img{
                display: block;
                width: 3.1rem;
                height: 3.1rem;
              }
              .title{
                font-size: 0.23rem;
              }
            }  
          }                            
       }     
  }  
</style>
