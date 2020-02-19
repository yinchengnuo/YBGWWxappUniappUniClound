<template>
	<view class="baihuo">
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
					<swiper-item v-for="(listItem, listIndex) in lists" :key="listIndex">
						<scroll-view scroll-y :style="{ height: MIXIN_ScrollViewHeight + 'px' }">
							<view v-if="isEditMode" class="item add" @tap="addGood(listIndex)">+</view>
							<good-item class="item" v-for="(item, index) in listItem" :key="index" :item="item" />
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
				path: '/pages/baihuo/baihuo'
			}
		},
		mixins: [MIXIN_Nav, MIXIN_List],
		components: { goodItem, pulldownRefresher },
		data() {
			return {
				navList: ['洗化', '百货', '针织', '日用', '厨房'],
				lists: []
			}
		},
		mounted() {
			uni.$on('REFRESH2', () => this.$refs.pulldownRefresher.pulldown())
		},
		methods: {
			refresh() { // 下拉刷新（请求数据）
				uni.showLoading({ mask:true, title: '加载中...' })
				uniCloud.callFunction({ name: 'good-R', data: { type: 2 },
				}).then(({ result }) => {
					uni.hideLoading()
					this.lists = result
					this.$refs.pulldownRefresher.pullup()
				})
			},
			addGood(type) { // 点击添加商品
				this.$router.push('/add-good', {
					type: '2-' + (type + 1)
				})
			}
		}
	}
</script>

<style lang="scss">
	.baihuo {
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
