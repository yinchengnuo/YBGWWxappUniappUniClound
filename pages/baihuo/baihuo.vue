<template>
	<view class="baihuo">
		<view class="nav-bar">
			<view class="nav-bar-items">
				<view v-for="item in navList" class="nav-bar-item" :key="item">{{ item }}</view>
			</view>
			<view class="nav-bar-drog" :style="{ left: MIXIN_DrogLeft + 'px' }"><text></text></view>
		</view>
		<view class="nav-view">
			<swiper @transition="MIXIN_transition" @change="MIXIN_change" @animationfinish="MIXIN_animationfinish">
				<swiper-item>
					<view class="swiper-item">
						<view class="test" v-for="item in 20" :key="item"></view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="test" v-for="item in 20" :key="item"></view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="test" v-for="item in 20" :key="item"></view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="test" v-for="item in 20" :key="item"></view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import navMIXIN from '@/mixin/nav.js'
	export default {
		mixins: [navMIXIN],
		data() {
			return {
				navList: ['洗化', '百货', '针织', '五金'],
			}
		}
	}
</script>

<style lang="scss">
	.baihuo {
		@include flex(column);
		height: 100%;
	}
</style>
