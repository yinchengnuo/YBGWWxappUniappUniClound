<template>
	<view class="baihuo">
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
		mixins: [MIXIN_Nav, MIXIN_List],
		components: { goodItem, pulldownRefresher },
		data() {
			return {
				navList: ['洗化', '百货', '针织', '五金', '烟花'],
				lists: []
			}
		},
		mounted() {
			uni.$on('REFRESH2', () => this.$refs.pulldownRefresher.pulldown())
		},
		methods: {
			refresh() { // 下拉刷新（请求数据）
				uni.showLoading({ mask:true, title: '加载中...' })
				uniCloud.callFunction({ name: 'goodR', data: { type: 2 },
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
</style>
