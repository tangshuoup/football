 <template>
 <transition name="loading">
	<div class="loading_container">
	    <div class="load_img icon-20 iconfont">
	    </div>
        <div class="title">
            正在加载...
        </div>
	</div>
</transition>
</template>

<script>
    export default {
    	data() {
            return {
                positionY: 0,
                timer: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../common/sass/mixin';
	@keyframes load{
		0%   {transform: translateY(0px);}
		50%  {transform: translateY(-50px);}
		100% {transform: translateY(0px);}
	}
	@keyframes ellipse{
		0%   {transform: scale(1);}
		50%  {transform: scale(0.3);}
		100% {transform: scale(1);}
	}
    .loading_container{
    	position: fixed;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    	@include wh(2.5rem, 2.5rem);
        z-index: 100;
        .title{
            font-size: 0.2rem;
        }
    }
    .load_img{
    	@include wh(100%, 100%);
        font-size: 1.5rem;
    	transform: translateY(0px);
    	animation: load .6s infinite ease-in-out;
    	position: relative;
    	
    }
	.load_ellipse{
		position: absolute;
		@include wh(2.4rem, 2rem);
		top: 2.2rem;
		left: 0.11rem;
		animation: ellipse .6s infinite ease-in-out;
	}
    .loading-enter-active, .loading-leave-active {
        transition: opacity .7s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }  
</style>
