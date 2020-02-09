<template>
	<view class="wode">
		<view class="userinfo" @longpress="auth">
			<open-data class="avatar" type="userAvatarUrl"></open-data>
			<open-data class="nickname ellipsis" type="userNickName"></open-data>
		</view>
		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="333">
			<swiper-item>
				<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=990087231,1878185023&fm=26&gp=0.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3361751452,3145469743&fm=26&gp=0.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557633156,2560600456&fm=26&gp=0.jpg"></image>
			</swiper-item>
		</swiper>
		<view class="app-item">
			<text class="cuIcon-cart left"></text>
			<text class="center">购物车</text>
			<text class="cuIcon-right right"></text>
		</view>
		<view class="app-item">
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
		data() {
			return {
				
			}
		},
		computed: {
			isAdmin() { return this.$store.state.userinfo.isAdmin }
		},
		methods: {
			switchChange({ detail: { value } }) {
				this.$store.commit('app/isEditMode', value)
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
			height: 124rpx;
			border-radius: 62rpx;
			justify-content: flex-start;
			.avatar {
				width: 124rpx;
				height: 124rpx;
				overflow: hidden;
				border-radius: 50%;
				margin-right: 24rpx;
			}
			.nickname {
				@include flex();
				flex: 1;
				height: 100%;
				justify-content: flex-start;
			}
		}
		swiper {
			height: 240rpx;
			overflow: hidden;
			margin-top: 24rpx;
			border-radius: 24rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
