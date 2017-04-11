<template>
	 <div class="index-warpper">    
    		<nav class="nav border-1px">
	          <ul class="item">
	            <li @click="tab(i)" v-for="(item, i) in navList" class="item-list" :class="curIndex === i ? 'active':''">{{item}}</li>
	          </ul>
        	</nav>   
         <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper" >
                <div class="swiper-slide site" ref="site">                    
                    <ul class="site-wrapper">   
                      <li class="site-list" v-for="item in index">                  
                         <router-link :to="{ path:'/index/movieDetial', query: { id: item.id }}" class="click-wrapper" > 
                          <img :src="item.img" alt="">
                          <span class="title">{{item.nm}}</span>
                          </router-link> 
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
          <transition name="router-slid" mode="out-in">           
            <router-view></router-view>
            </transition>
      </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import loading from '../loading/loading'
// import {mapMutations} from 'vuex'
 const ERR_OK = 200;
	export default {
		data() {
      		return {             	
            	navList: ['足球现场', '足球生活', '足球美女'],
              index: {},
              showLoading: true,
              allLoaded: false                                                               
      		};
    	},
      created() {    
          this.initData();
      },
       mounted() {
          let that=this;
          this.Swiper = new Swiper(this.$refs.swiperContainer, {    
            touchMoveStopPropagation: false,
            threshold: 100,
            passiveListeners: false,        
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
         initData() {
           this.$http.get('/api/movie/list.json?type=hot&offset=0&limit=10').then((response) => {   
             if (response.status === ERR_OK) {   
                    this.index = response.data.data.movies;                  
                    this.$nextTick(() => {                    
                    this._initScroll(); 
                    this.showLoading = false;                                     
                  })                                    
                }
          });          
        },
	      	tab(index) {         
	          this.Swiper.slideTo(index);        
	        },
          _initScroll() {                      
                  this.scroll = new BScroll(this.$refs.site, {
                        click: true
                })        
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
      flex:1;
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
            border-bottom: 4px solid #D43C33;
            color: #D43C33;
          }
        }
      }
    }
   .swiper-container{
    flex:1;
    .swiper-wrapper{
      width: 100%;
      flex:1;
    }
    .swiper-slide{
      width: 100%;
      height: 8rem;
      .site-wrapper{
          display: flex;                                                                    
          flex-direction:row;
          flex-wrap: wrap;
          justify-content: space-between;
          .site-list{
            width: 3.1rem;
            border: 1px solid #E5E5E5;
            margin-bottom: 0.13rem;             
            .click-wrapper{
              position: relative;
              z-index: 100;
              overflow:hidden;
            }       
             &.site-list:nth-of-type(even){
                margin-right: 0;
             }
              img{
                display: block;
                width: 3.1rem;
                height: 4.5rem;
              }
              .title{
                font-size: 0.23rem;
              }
            }  
          }                            
       }
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
</style>
