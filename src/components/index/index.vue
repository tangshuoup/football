<template>
	<div class="index">
		<nav class="nav border-1px">
      <ul class="item">
        <li @click="tab(i)" v-for="(item, i) in navList" class="item-list" :class="{'active': curIndex===i}">{{item}}</li>
      </ul>
    </nav>

	</div>
</template>
<script>
// import Swiper from 'swiper'

	export default {
		data() {
      		return {
        		curIndex: 0,
            navList: ['足球现场', '足球生活', '足球美女']
      		};
    	},
      // created() {
      //   Hub.$on('tab', (index) => {
      //     this.index = this.curIndex
      //   })
      // },
    	methods: {
      	tab(index) {
          this.curIndex = index;          
        }
    	},
      components: {
        
      }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../../common/sass/mixin';

.index{ 
    .nav{    
     @include border-1px(rgb(217,217,217)); 
     box-sizing: border-box;
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
  }

</style>
