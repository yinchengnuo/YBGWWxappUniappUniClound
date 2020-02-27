<template>
	<view class="fushi">
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
		<view class="nav-bar">
			<view class="nav-bar-items">
				<view v-for="(item, index) in navList" class="nav-bar-item" :class="{ active: MIXIN_ActiveIndex === index }" :key="index" @tap="MIXIN_SwitchNav(index)">{{ item }}</view>
			</view>
			<view class="nav-bar-drog" :style="{ left: MIXIN_DrogLeft + 'px' }"><text></text></view>
		</view>
		<view class="nav-view">
			<pulldown-refresher ref="pulldownRefresher" @pulldownRefresh="refresh">
				<swiper class="swiper" :duration="333" :current="MIXIN_ActiveIndex" @transition="MIXIN_transition" @change="MIXIN_change" @animationfinish="MIXIN_animationfinish">
					<swiper-item v-for="(value, key, index) in lists" :key="index">
						<scroll-view scroll-y :style="{ height: MIXIN_ScrollViewHeight + 'px' }">
							<view v-if="isEditMode" class="item add" @tap="addGood(index)">+</view>
							<good-item class="item" v-for="(item, index) in value" :key="index" :item="item" />
							<view class="nomore">没有更多了</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</pulldown-refresher>
		</view>
		<view class="fixed-shop-car"></view>
	</view>
</template>

<script>
	import MIXIN_Nav from '@/mixin/nav.js'
	import MIXIN_List from '@/mixin/list.js'
	import goodItem from '@/components/good-item.vue'
	import pulldownRefresher from '@/components/pulldown-refresher.vue'
	export default {
		onShareAppMessage () {  //分享小程序
			return {
				title: '益百购物欢迎您！',
				path: '/pages/fushi/fushi'
			}
		},
		mixins: [MIXIN_Nav, MIXIN_List],
		components: { goodItem, pulldownRefresher },
		data() {
			return {
				navList: ['副食', '饮料', '酒水', '散点', '粮油'],
				lists: { 0: [], 1: [], 2: [], 3: [], 4: [] }
			}
		},
		mounted() {
			uni.$on('REFRESH1', noLoading => this.$refs.pulldownRefresher.pulldown(noLoading))
		},
		methods: {
			refresh(noLoading) { // 下拉刷新（请求数据）
				!noLoading && uni.showLoading({ mask:true, title: '加载中...' })
				uniCloud.callFunction({ name: 'good-R', data: { type: 1 } }).then(async ({ result }) => {
					this.$refs.pulldownRefresher.pullup()
					this.lists[0] = result[0]
					uni.hideLoading()
					await new Promise(resolve => setTimeout(() => resolve(), 567))
					this.lists[1] = result[1]
					await new Promise(resolve => setTimeout(() => resolve(), 567))
					this.lists[2] = result[2]
					await new Promise(resolve => setTimeout(() => resolve(), 567))
					this.lists[3] = result[3]
					await new Promise(resolve => setTimeout(() => resolve(), 567))
					this.lists[4] = result[4]
				})
			},
			addGood(type) { // 点击添加商品
				this.$router.push('/add-good', {
					type: '1-' + (type + 1)
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
	@keyframes right-left {
		0% {
			transform: translateX(682rpx);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
