<template>
  <div id="app">
    <my-header>      
    </my-header>   
    <transition name="router-fade" mode="out-in">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </transition>  
     <ul class="footer">
      <router-link to="/index" class="foot-tab">  
        <li>
          <i class="iconfont icon-shouyeshouye"></i>
          <b>首页</b>
        </li>
      </router-link>
      <router-link :to="{ path: '/search', query: { id: this.curIndex }}" class="foot-tab">
        <li>
          <i class="iconfont icon-faxian"></i>
          <b>发现</b>
        </li>
      </router-link>
      <div class="foot-tab"> 
        <li class="li_three">
          <i class="iconfont icon-xiangji"></i>
        </li>
      </div>
      <router-link to="/mine" class="foot-tab"> 
        <li>
          <i class="iconfont icon-wo"></i>
          <b>我的</b>
        </li>
      </router-link>
      <div class="foot-tab">
        <li>
          <i class="iconfont icon-exit"></i>
          <b>退出</b>
        </li>
      </div>
      </ul>
  </div>
</template>

<script>
import header from './components/header/header';
export default {
  data() {
    return {
      curIndex: 456  
    }
  }, 
  methods: {
    selectTab(index) {
      console.log(index);
      this.curIndex = index;
    }
  },
  components: {
    'my-header': header
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import './common/sass/mixin.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  .footer{      
      display: flex;
      width: 100%;
      height: 0.88rem;
      background: #fff;
      border-top: 1px solid rgb(217,217,217);
      flex-shrink:0;
    .foot-tab{
       width: 20%;
      li{
          display: flex;
          flex-direction:column;                 
          justify-content: space-around;
          width: 100%;
          height: 100%;
          line-height: 0.45rem;          
           &.li_three{   
            position: relative;
            height: 1.04rem;
            width: 1.04rem;
            top: -0.2rem;
            z-index: 10;
            background: #fff;
            margin: 0 auto ;             
            border:1px solid rgb(217,217,217);
            border-radius: 50%;
             i{
              font-size: 0.54rem;
              color: rgb(217,217,217);
            }
        }
         i{          
           font-size: 0.34rem;
           color: rgb(217,217,217);
          }
          b{          
           font-size:0.26rem; 
           color: rgb(217,217,217);
          }
      }   
      &.active{
          i,b{
            color:#D43C33;
          }
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
