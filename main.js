import Vue from 'vue'
import App from './App'
import $store from './store'
import $router, { $route } from '@/common/js/uni_router.js'

Vue.prototype.$store = $store
Vue.prototype.$route = $route // 当前路由对象，保存路由当前信息
Vue.prototype.$router = $router // 路由对象，保存了实例方法

Vue.prototype.$offset = function (selector) { // 获取元素宽高位置信息
	return new Promise((resolve, reject) => {
		uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
			data ? data.x = data.left + data.width / 2 : ''
			data ? data.y = data.top + data.height / 2 : ''
			data ? resolve(data) : reject('元素不存在')
		}).exec()
	})
}

Vue.prototype.$mini = src => { // 图片压缩方法
	return new Promise(resolve => {
		plus.io.getImageInfo({
			src,
			success(e) {
				plus.zip.compressImage({
					src,
					quality: 24,
					width: '24%',
					height: '24%',
					overwrite: true,
					dst: `_doc/${Date.now()}.jpg`,
					clip: {
						top: `${Math.floor((1 - (e.width / e.height)) * 50)}%`,
						height: `${Math.floor((e.width / e.height) * 100)}%`
					}
				}, e => {
					resolve(e.target)
				})
			}
		})
	})
}

Vue.config.productionTip = false

;( new Vue( { ...App } ) ).$mount()
