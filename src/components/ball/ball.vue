<template>
	 <div class="ball" ref="ball">             
        <ul class="ball-wrapper">
          <li v-for="item in ball" class="ball-list">
            <img :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
          </li>           
        </ul>   
        <loading v-show="showLoading"></loading>      
    </div>    	
</template>
<script>
import BScroll from 'better-scroll'
import loading from '../loading/loading'
const ERR_OK = 200;
	export default {
		data() {
			return {
				ball: {},
				showLoading: true  
			}
		},
		created() {    
          this.$http.get('/api/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid=').then((response) => {                            
              if (response.status === ERR_OK) {            
                  this.ball = response.data.subjects; 
                  	this.$nextTick(() => {  			                                    
			            this._initScroll(); 
			            this.showLoading = false;                                     
		          })                                    
                }
          });          
    	},    	
		methods: {
			_initScroll() {       
	              if (!this.scroll) {
	                this.scroll = new BScroll(this.$refs.ball, {
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
	
</style>
