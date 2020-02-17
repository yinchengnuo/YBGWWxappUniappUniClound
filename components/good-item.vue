<template>
	<view class="good-item" @tap="preview">
		<image class="good-pic" :src="item.url" mode="aspectFill"></image>
		<view class="edit-info" v-if="isEditMode" @tap.stop="">
			<view class="edit" @tap="edit">
				<text class="cuIcon-edit"></text>
			</view>
			<view class="del" @tap="del">
				<text class="cuIcon-delete"></text>
			</view>
		</view>
		<view class="good-info" @tap.stop="">
			<view class="info">
				<view class="name">{{ item.name }}</view>
				<view>
					<text class="price">{{ item.price }}</text>
					<text>{{ ' 元 / ' }}</text>
					<text>{{ item.unit }}</text>
				</view>
			</view>
			<!-- <view class="shop-car">
				<text class="cuIcon-cartfill"></text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {}
		},
		computed: {
			isEditMode() { return this.$store.state.app.isEditMode } // 是否为编辑模式
		},
		methods: {
			del() { // 删除商品
				uni.showModal({
				    title: '确定删除此商品？',
				    content: `${this.item.name}    ${this.item.price}元 / ${this.item.unit}`
				}).then(async ([, res]) => {
					if (res.confirm) {
						uni.showLoading({ mask:true, title: '删除中...' })
						await uniCloud.deleteFile({ fileList: [this.item.url] }) // 删除商品压缩图片的云存储空间
						await uniCloud.deleteFile({ fileList: [this.item._url] }) // 删除商品原图片的云存储空间
						await uniCloud.callFunction({ name: 'good-D', data: { _id: this.item._id } }) // 删除商品图片的数据库记录
						uni.hideLoading()
						uni.$emit(`REFRESH${this.item.type.split('-')[0]}`, 'noLoading')
						uni.showModal({ title: '删除成功', showCancel: false,
							content: `${this.item.name}    ${this.item.price}元 / ${this.item.unit}`
						})
					}
				})
			},
			edit() { // 编辑商品
				this.$router.push('/edit-good', { ...this.item })
			},
			preview() { // 预览商品图片
				uni.showLoading({ mask: true })
				uni.previewImage({ urls: [this.item._url] })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.good-item {
		width: 100%;
		height: 100%;
		position: relative;
		.good-pic {
			width: 100%;
			height: 100%;
			position: absolute;
		}
		.edit-info {
			@include flex();
			width: 100%;
			height: 98rpx;
			position: absolute;
			justify-content: space-between;
			>view {
				@include flex();
				width: 98rpx;
				height: 98rpx;
				color: #FFFFFF;
				font-size: 45rpx;
				border-bottom-left-radius: 24rpx;
				background-color: rgba(0, 0, 0, .3);
				&.edit {
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 24rpx;
				}
			}
		}
		.good-info {
			@include flex();
			bottom: 0;
			width: 100%;
			padding: 12rpx;
			height: 122rpx;
			color: #FFFFFF;
			position: absolute;
			box-sizing: border-box;
			background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .6));
			.info {
				flex: 1;
				height: 100%;
				.name, .price {
					font-size: 36rpx;
				}
			}
			.shop-car {
				@include flex();
				width: 88rpx;
				height: 88rpx;
				color: #FF0000;
				font-size: 45rpx;
				border-radius: 50%;
				position: relative;
				border: 1rpx solid #FF0000;
				background: rgba(255, 255, 255, .3);
			}
		}
	}
</style>
