<template>
	<view class="wode">
		<view class="userinfo" @longpress="auth">
			<open-data class="avatar" type="userAvatarUrl"></open-data>
			<open-data class="nickname ellipsis" type="userNickName"></open-data>
		</view>
		<swiper @longpress="changeSwiper" :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="333">
			<swiper-item v-for="(item, index) in swiperList" :key="index" @tap="preview(index)">
				<image :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<navigator url="../location/location" class="app-item">
			<text class="cuIcon-location left"></text>
			<text class="center">商家地址</text>
			<text class="cuIcon-right right"></text>
		</navigator>
		<view class="app-item" @tap="callPhone">
			<text class="cuIcon-phone left"></text>
			<text class="center">联系店长</text>
			<text class="cuIcon-right right"></text>
		</view>
		<view class="app-item" @tap="willOpen">
			<text class="cuIcon-cart left"></text>
			<text class="center">购物车</text>
			<text class="cuIcon-right right"></text>
		</view>
		<view class="app-item" @tap="willOpen">
			<text class="cuIcon-list left"></text>
			<text class="center">我的订单</text>
			<text class="cuIcon-right right"></text>
		</view>
		<view v-if="isAdmin" class="app-item">
			<text class="cuIcon-edit left"></text>
			<text class="center">编辑模式</text>
			<switch class="red" @change="switchChange" />
		</view>
	</view>
</template>

<script>
	export default {
		onShareAppMessage () {  //分享小程序
			return {
				title: '益百购物欢迎您！',
				path: '/pages/fushi/fushi'
			}
		},
		data() {
			return {
				swiperList: []
			}
		},
		computed: {
			isAdmin() { return this.$store.state.userinfo.isAdmin }
		},
		created() {
			uni.startPullDownRefresh()
		},
		onPullDownRefresh() {
			uniCloud.callFunction({ name: 'swiper-R'}).then(({ result }) => {
				this.swiperList = result
				uni.stopPullDownRefresh()
				uni.hideLoading()
			})
		},
		methods: {
			switchChange({ detail: { value } }) { // 切换编辑模式
				this.$store.commit('app/isEditMode', value)
			},
			callPhone() { // 拨打店长电话
				uni.showLoading({ mask: true, title: '加载中...' })
				uni.makePhoneCall({ phoneNumber: '18837723191' })
			},
			willOpen() { // 提示开发
				uni.showToast({ icon: 'none', title: '开发中，敬请期待！' })
			},
			preview(index) { // 预览轮播图
				uni.previewImage({ urls: this.swiperList, current: index })
			},
			changeSwiper() { // 更换轮播图
				if (this.isAdmin) { // 只有管理员可以操作
					uni.chooseImage({ sourceType: ['album'], sizeType: ['compressed'] }).then(async ([, { tempFilePaths }]) => { // 选择图片
						uni.showLoading({ mask: true, title: '更换中...' })
						const data = []
						for(let i = 0; i < tempFilePaths.length; i ++) {
							const { fileID } = await uniCloud.uploadFile({ filePath: tempFilePaths[i] }) // 选择图片后上传
							data.push(fileID)
						}
						await uniCloud.callFunction({ name: 'swiper-U', data }) // 上传成功后修改数据库
						for(let i = 0; i < this.swiperList.length; i ++) {
							await uniCloud.deleteFile({ fileList: [this.swiperList[i]] }) // 删除之前图片的云存储空间
						}
						uni.startPullDownRefresh()
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.wode {
		height: 100%;
		padding: 24rpx;
		box-sizing: border-box;
		.userinfo {
			@include flex();
			height: 88rpx;
			border-radius: 62rpx;
			justify-content: flex-start;
			.avatar {
				width: 88rpx;
				height: 88rpx;
				overflow: hidden;
				border-radius: 50%;
				margin-right: 24rpx;
			}
			.nickname {
				@include flex();
				flex: 1;
				height: 100%;
				font-size: 38rpx;
				justify-content: flex-start;
			}
		}
		swiper {
			height: 345rpx;
			overflow: hidden;
			margin-top: 24rpx;
			border-radius: 24rpx;
			box-shadow: 0 0 1rpx 1rpx #C0C0C0;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
