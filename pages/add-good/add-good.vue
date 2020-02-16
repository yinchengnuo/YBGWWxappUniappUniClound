<template>
	<view class="add-good">
		<view class="good-image" @tap="ChooseImage">
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img choose" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="choose" v-if="imgList.length === 0">
						<text class="cuIcon-camera"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="good-info-item">
			<text>商品名称</text>
			<input type="text" v-model="name" maxlength="6" placeholder="请输商品名称" />
		</view>
		<view class="good-info-item">
			<text>商品价格</text>
			<input type="digit" v-model="price" placeholder="请输商品价格" />
		</view>
		<view class="good-info-item">
			<text>商品单位</text>
			<input type="text" v-model="unit" placeholder="请输商品单位" />
		</view>
		<button class="bg-red margin-top" @tap="addGood">添加商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				type: '',
				name: '',
				price: '',
				unit: ''
			}
		},
		onLoad(e) {
			this.type = this.$route.query.type
		},
		methods: {
			ChooseImage() { // 拍照
				if (!this.imgList.length) {
					uni.chooseImage({ sourceType: ['camera'], sizeType: ['compressed'] }).then(([, { tempFilePaths }]) => this.imgList = tempFilePaths)
				}
			},
			ViewImage(e) { // 预览图片
				uni.previewImage({ urls: this.imgList })
			},
			DelImg(e) { // 删除图片
				uni.showModal({
					title: '删除',
					content: '确定删除这张商品图片嘛？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			async addGood() { // 添加商品
				if (!this.imgList.length) {
					uni.showToast({ title: '商品图片不能为空', icon: 'none' })
					return
				}
				if (!this.name) {
					uni.showToast({ title: '商品名称不能为空', icon: 'none' })
					return
				}
				if (!this.price) {
					uni.showToast({ title: '商品价格不能为空', icon: 'none' })
					return
				}
				if (!this.unit) {
					uni.showToast({ title: '商品单位不能为空', icon: 'none' })
					return
				}
				uni.showLoading({ mask:true, title: '添加中...' })
				const { fileID: url } = await uniCloud.uploadFile({ filePath: this.imgList[0] })
				uniCloud.callFunction({
					name: 'good-C',
					data: {
						url,
						type: this.type,
						unit: this.unit,
						name: this.name,
						price: this.price,
						addTime: Date.now()
					},
				}).then(({ result }) => {
					uni.hideLoading()
					uni.showModal({
						title: '添加成功',
						showCancel: false,
						content: `${this.name}    ${this.price}元 / ${this.unit}`
					}).then(() => {
						uni.$emit(`REFRESH${this.type.split('-')[0]}`)
						this.$router.pop()
					})
				}).catch(e => {
					uni.hideLoading()
					uni.showToast({ title: '上传失败，请联系成诺', icon: 'none' })
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-good {
		height: 100%;
		padding: 24rpx;
		box-sizing: border-box;
		.good-image {
			height: 234rpx;
			padding: 24rpx;
			overflow: hidden;
			border-radius: 24rpx;
			box-sizing: border-box;
			border: 1rpx solid #C0C0C0;
			.choose {
				width: 180rpx;
				height: 180rpx;
				margin: 0 auto;
				position: relative;
				border-radius: 4rpx;
				border: 3rpx dashed rgba(178,178,178,1);
				.cuIcon-camera {
					font-size: 75rpx;
					color: rgba(178,178,178,1);
				}
			}
		}
	}
</style>
