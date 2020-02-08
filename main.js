import Vue from 'vue'
import App from './App'
import $router, { $route } from '@/common/js/uni_router.js'

Vue.prototype.$route = $route // 当前路由对象，保存路由当前信息
Vue.prototype.$router = $router // 路由对象，保存了实例方法

Vue.config.productionTip = false

;( new Vue( { ...App } ) ).$mount()
