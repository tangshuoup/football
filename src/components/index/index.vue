<template>
	<div class="index" ref="index">
    <div class="switchover">
          <div class="swith-index">
            <span class="host-pot" @click="attShowTrue" :class="attentionShow ? 'switch-active' : ''">热点</span>
            <span class="attention" @click="attShow" :class="attentionShow ? '' : 'switch-active'">关注</span>
          </div>  
      </div>
      <host v-show="attentionShow"></host>
      <attention v-show="!attentionShow" ref="attention"></attention>  
  
	</div>
</template>
<script>
import host from '../host/host'
import attention from '../attention/attention'
	export default {
    props: {
      index: {
        type: Object
      }
    },
		data() {
      		return {             	           
            attentionShow: true                    
      		};
    	},
    	methods: { 
        attShow() {          
          this.attentionShow = false;
          this.$refs.attention.show();
        },
        attShowTrue() {         
           this.attentionShow = true
        }        
    	},
      components: {
        host,
        attention          
      }           
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  
  .index{ 
     display: flex;
     flex-direction:column;
     overflow: hidden;
     flex:1;
    .switchover{
        width: 60%;
        font-size: 0;
        position:absolute;
        top: 0;
        left: 20%;     
        .swith-index{ 
          width: 2.35rem; 
          height: 0.5rem;
          margin: 0.2rem auto;
            .host-pot, .attention{
              display: inline-block;
              vertical-align: top;
              width: 50%;
              font-size: 0.26rem;
              line-height: 0.5rem; 
              background: #3dd066;              
            &.host-pot{
              border-top-left-radius:16px;
              border-bottom-left-radius:16px;
            }
            &.attention{
              border-top-right-radius:16px;
              border-bottom-right-radius:16px;
            }
            &.switch-active{
              background: #63d985;
              color: #fff;
            }
          }
        } 
      }
    }   
</style>
