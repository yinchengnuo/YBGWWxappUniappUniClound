<template>
	<view class="wode">
		<view class="roll">
			<text class="cuIcon-notification"></text>
			<view class="roll-view">
				<view class="roll-item">
					疫情面前，咱不添乱。
					需要调料、肉类、各种鲜菜类、丸子、饺子、鸡腿、鸭腿、砂糖橘苹果、🍌香蕉、梨🍐、橙子、柚子、等。
					各种牛奶、散点、生瓜子、熟瓜子花生、各种粮食、大米、各种零食等。
					微信留言或者打电话18837714565。下乡配送，龙堰益百购物超市。
				</view>
			</view>
		</view>
		<view class="userinfo" @longpress="auth">
			<open-data class="avatar" type="userAvatarUrl"></open-data>
			<open-data class="nickname ellipsis" type="userNickName"></open-data>
		</view>
		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="333">
			<swiper-item v-for="(item, index) in swiperList" :key="index" @tap="preview(index)">
				<image :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="app-item" @tap="willOpen">
			<text class="cuIcon-search left"></text>
			<input class="center" type="text" disabled placeholder="找不到商品？试试搜索..." />
			<text class="cuIcon-right right"></text>
		</view>
		<!-- #ifndef APP-PLUS -->
			<navigator url="../location/location" class="app-item">
				<text class="cuIcon-location left"></text>
				<text class="center">商家地址</text>
				<text class="cuIcon-right right"></text>
			</navigator>
		<!-- #endif -->
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
		<!-- #ifdef APP-PLUS -->
		<view v-if="isAdmin" class="app-item" @tap="changeSwiper">
			<text class="cuIcon-refresh left"></text>
			<text class="center">更换轮播图</text>
			<text class="cuIcon-right"></text>
		</view>
		<view v-if="isAdmin" class="app-item">
			<text class="cuIcon-edit left"></text>
			<text class="center">编辑商品模式</text>
			<switch class="red" @change="switchChange" />
		</view>
		<!-- #endif -->
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
			if (this.$store.state.userinfo.isAdmin) {
				uni.startPullDownRefresh()
			} else {
				//#ifdef APP-PLUS
					uni.reLaunch({ url: '../login/login' })
				//#endif
				//#ifndef APP-PLUS
					uni.startPullDownRefresh()
				//#endif
			}
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
		input {
			width: 456rpx;
			height: 66rpx;
			font-size: 30rpx;
			text-align: center;
			border-radius: 33rpx;
			border: 1rpx solid #C0C0C0;
		}
	}
	@keyframes right-left {
		0% {
			transform: translateX(682rpx);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
