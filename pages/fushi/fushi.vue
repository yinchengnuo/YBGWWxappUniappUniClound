<template>
	<view class="fushi">
		<!-- <button type="primary" @tap="test">test</button> -->
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
				navList: ['副食', '饮料', '酒水', '香烟'],
			}
		},
		methods: {
			async test() {
				const [, { tempFilePaths: [filePath] }] = await uni.chooseImage({ sourceType: ['camera']})
				uniCloud.uploadFile({ filePath: filePath }).then(({ fileID }) => {
					console.log(fileID)
					setTimeout(() => {
						uniCloud.deleteFile({ fileList: [fileID] })
					}, 6666)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fushi {
		@include flex(column);
		height: 100%;
	}
</style>
