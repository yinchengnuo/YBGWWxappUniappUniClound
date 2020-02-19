<template>
	<view class="edit-good">
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
			<input type="text" v-model="name" maxlength="9" placeholder="请输商品名称" />
		</view>
		<view class="good-info-item">
			<text>商品价格</text>
			<input type="digit" v-model="price" placeholder="请输商品价格" />
		</view>
		<view class="good-info-item">
			<text>商品单位</text>
			<input type="text" v-model="unit" placeholder="请输商品单位" />
		</view>
		<button class="bg-red margin-top" @tap="addGood">修改商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				unit: '',
				name: '',
				price: '',
				imgList: []
			}
		},
		onLoad(e) {
			this.url = this.$route.query.url
			this.name = this.$route.query.name
			this.unit = this.$route.query.unit
			this.price = this.$route.query.price
			this.imgList = [this.$route.query._url]
		},
		methods: {
			ChooseImage() { // 拍照
				if (!this.imgList.length) {
					uni.chooseImage({ sourceType: ['camera'], sizeType: ['compressed'] }).then(([, { tempFilePaths }]) => this.imgList = tempFilePaths)
				}
			},
			ViewImage(e) { // 预览
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
				let url, _url
				uni.showLoading({ mask:true, title: '修改中' })
				if (this.imgList[0].match(/bsppub.oss-cn-shanghai.aliyuncs.com/g)) { // 如果是云存储图片
					url = this.$route.query.url
					_url = this.$route.query._url
				} else { // 如果不是是云存储图片，表示图片发生变化
					await uniCloud.deleteFile({ fileList: [this.$route.query.url] }) // 删除之前的云存储空间
					await uniCloud.deleteFile({ fileList: [this.$route.query._url] }) // 删除之前的云存储空间
					const { fileID } = await uniCloud.uploadFile({ filePath: this.imgList[0] }) // 上传原图
					_url = fileID
					const filePath = await this.$mini(this.imgList[0]) // 压缩图片
					const { fileID: miniUrl } = await uniCloud.uploadFile({ filePath }) // 上传压缩原图
					url = miniUrl
				}
				uniCloud.callFunction({
					name: 'good-U',
					data: {
						_id: this.$route.query._id,
						data: {
							url,
							_url,
							name: this.name,
							price: this.price,
							unit: this.unit
						}
					},
				}).then(({ result }) => {
					uni.hideLoading()
					uni.showModal({
						title: '修改成功',
						showCancel: false,
						content: `${this.name}    ${this.price}元 / ${this.unit}`
					}).then(() => {
						uni.$emit(`REFRESH${this.$route.query.type.split('-')[0]}`)
						this.$router.pop()
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-good {
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
