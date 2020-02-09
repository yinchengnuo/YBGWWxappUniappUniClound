<script>
	export default {
		async onLaunch() {
			const isAdmin = openid => {
				console.log(openid)
				switch (openid) {
					case 'oZ4LF5PZPyalw67t7Bzm79kXPrkY': return true // 忙着长大
					case 'oZ4LF5Hi_iDCvLf0aL4EP4OfTiEk': return true // 尹记
					case 'oZ4LF5Cd9lKLiVAzzFodL3ne2Lfg': return true // 爸
					case '': return true // 妈
					case 'oZ4LF5NL6yAtAYqJoh1wi3BvsgXY': return true // 娟娟
					default: return false
				}
			}
			const [, { code }] = await uni.login()
			uniCloud.callFunction({
				name: 'login',
				data: { code }
			}).then(({ result: { openid } }) => {
				this.$store.commit('userinfo/isAdmin', isAdmin(openid))
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'common/style/main.scss';  //引入 ColorUI 组件库主样式
	@import 'common/style/icon.scss';  //引入 ColorUI 组件库图标样式
	@import 'common/style/animation.scss';  //引入 ColorUI 组件库动画样式
	page {  //uniapp 中的 page 标签相当于 html 中的 body, 默认高度为 auto, 但是高度为 100% 更利于 app 布局,你也可以在 page 中设置一些全局样式, 比如全局背景色
		height: 100%;
		background: #FFFFFF;
	}
</style>
