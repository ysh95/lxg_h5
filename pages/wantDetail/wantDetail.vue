<template>
	<view class="want">
		<view class="item">
			<view class="title">采购信息</view>
			<view class="every four">
				<label>采购产品：</label>
				<text>123</text>
			</view>
			<view class="every four">
				<label>需求数量：</label>
				<text>123</text>
			</view>
			<view class="every four">
				<label>产品价格：</label>
				<text>123</text>
			</view>
		</view>
		<view class="item">
			<view class="every four">
				<label>项目名称：</label>
				<text>123</text>
			</view>
			<view class="every four">
				<label>项目地址：</label>
				<text>123</text>
			</view>
			<view class="every four">
				<label>预算资金：</label>
				<text>123</text>
			</view>
			<view class="every four">
				<label>结算方式：</label>
				<text>123</text>
			</view>
			<view class="every four" style="align-items: flex-start;">
				<label>其他说明：</label>
				<text class="textLine">少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所</text>
			</view>
			<view class="every four" style="align-items: flex-start;">
				<label>图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 片：</label>
				<view class="img">
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="title">供应商信息</view>
			<view class="every">
				<label>供应商地区：</label>
				<text>123</text>
			</view>
			<view class="every">
				<label>品牌要求：</label>
				<text>123</text>
			</view>
		</view>
		<view class="item" style="margin-bottom: 90upx;">
			<view class="title">联系方式</view>
			<view class="every">
				<label>采购人姓名：</label>
				<text>123</text>
			</view>
			<view class="every">
				<label>采购人电话：</label>
				<text>123</text>
			</view>
			<view class="every">
				<label>采购人单位：</label>
				<text>123</text>
			</view>
		</view>
		<view class="btn" @tap="submit">获取联系方式</view>
		
		<uni-popup ref="popup" type="center">
			<view class="vip-box">
				<view class="close" @click="close">×</view>
				<view class="text">
					<text>发布信息</text>
					<text>请先发布一条供求信息，即可查看联 系方式</text>
				</view>
				<view class="fot">
					<view @click="navMembership">立即发布</view>
					<view class="cancel" @click="close">取消开通</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	
export default {
	data() {
		return {};
	},
	methods: {
		open(){
			 this.$refs.popup.open()
		},
		submit() {
			this.$refs.popup.open()
		},
		close() {
			this.$refs.popup.close()
		},
	}
};
</script>

<style lang="scss">
page {
	background-color: #f6f6f6;
}
.want {
	width: 750upx;
	// padding: 26rpx 0;
}
.item {
	width: 700rpx;
	padding: 26rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
	.title {
		position: relative;
		font-weight: bold;
		color: #333333;
		font-size: 32upx;
		padding-left: 28upx;
		margin-bottom: 18upx;
		&::after {
			content: '';
			position: absolute;
			width: 10upx;
			height: 36upx;
			background: #0076ff;
			border-radius: 6upx;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.every {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10upx;
		label {
			font-size: 28upx;
			color: #343434;
		}
		> text {
			color: #999999;
			font-size: 26upx;
			display: block;
			width: 530upx;
			// background-color: #007AFF;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.four {
		// align-items: flex-start;
		> text {
			color: #999999;
			font-size: 26upx;
			display: block;
			width: 555upx;
			// background-color: #007AFF;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.textLine {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			white-space: pre-wrap;
		}
		.img {
			width: 555upx;
			display: flex;
			flex-wrap: wrap;
			image {
				width: 176upx;
				height: 128upx;
				margin: 0 12upx 12rpx 0;
				&:nth-of-type(3n) {
					margin-right: 0;
				}
			}
		}
	}
}
.vip-box {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 450upx;
		// height: 430upx;
		background: #FFFFFF;
		border-radius: 6upx;

		.close {
			padding: 20upx;
			position: absolute;
			right: 0;
			top: 0;
			color: #999999;
			font-weight: bold;
			font-size: 40upx;
		}
		.text {
			font-size: 26upx;
			color: #909090;
			margin-top: 60upx;
			font-weight: bold;
			text-align: center;
			padding: 0upx 30upx 0 30upx;
			box-sizing: border-box;
			width: 100%;
			line-height: 1.5;
			>text{
				display: block;
				&:first-of-type{
					color: #565656;
					font-size: 38upx;
					margin-bottom: 20upx;
				}
			}
		}

		.fot {
			height: 115upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top: 1upx solid #DDDDDD;
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			margin-top: 30upx;
			>view {
				width: 174upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 6upx;
				font-size: 24upx;
				color: #FFFFFF;
				font-weight: bold;
				background:linear-gradient(0deg,rgba(17,115,231,1),rgba(1,84,179,1));
				text-align: center;
			}

			.cancel {
				border: 1upx solid #0076FF;
				color: #0076FF;
				background: #FFFFFF;
			}
		}
	}

</style>
