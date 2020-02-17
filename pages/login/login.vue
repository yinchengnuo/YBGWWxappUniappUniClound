<template>
	<view class="login">
		<input type="text" password v-model="psw" />
		<button @tap="login">登陆</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				psw: ''
			};
		},
		methods: {
			login() {
				if (this.psw === '88888888') {
					this.$store.commit('userinfo/getUserinfo', { isAdmin: true, openid: '666' })
					uni.reLaunch({ url: '../wode/wode' })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		@include flex(column);
		height: 100%;
		input {
			width: 567rpx;
			height: 88rpx;
			margin: 24rpx 0;
			font-size: 66rpx;
			text-align: center;
			border-radius: 24rpx;
			box-sizing: border-box;
			border: 1rpx solid #C0C0C0;
		}
		button {
			width: 567rpx;
			margin: 24rpx 0;
		}
	}
</style>
