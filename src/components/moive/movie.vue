<template>
	<div class="movie">
		<div class="top">
			<span></span>
			<span class="title">{{indexList.title}}</span>
		</div>
		<div class="details">
			<div class="img-wrapper">
				<img src="" alt="">
			</div>
			<div class="film">
				<div class="title">
					<p class="name"></p>
					<p class="english"></p>
				</div>
				<div class="grade">
					<div class="left">
						<span>用户评分</span>
						<span>
							<b></b>
						</span>
					</div>
					<div class="right">
						<span>专业评分</span>
						<span>
							<b></b>
						</span>
					</div>
				</div>
				<div class="story">
					
				</div>
				<div class="time">
					
				</div>
				<div class="show">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
	export default {
		 computed: {
            ...mapState([
                'indexList'
            ])
        }
	}
</script>
<style rel="stylesheet/scss" lang="scss">
.movie{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
	background: #fff;
}
</style>
