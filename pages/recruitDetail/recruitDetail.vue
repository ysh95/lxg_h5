<template>
	<view class="recruit">
		<view class="content">
			<view class="info">
				<text class="title">UI设计师</text>
				<text class="center">西安 | 5-10年工作经验 | 统招本科</text>
				<text class="money">15k-25k</text>
			</view>
			<view class="item">
				<image src="../../static/logo.png" mode=""></image>
				<view>
					<text>阿里巴巴集团</text>
					<text>移动互联网·B轮·0-99人</text>
				</view>
			</view>
			<view class="info">
				<text class="title">职位详情</text>
				<view>
					<text>岗位职责：</text>
					<view class="">
						<text class="">
							1.jdgjsfdnlkdfj
							2.司法解释拉倒吧
						</text>
					</view>
				</view>
				<view>
					<text>任职要求：</text>
					<view class="">
						<text class="">
							1.jdgjsfdnlkdfj
							2.司法解释拉倒吧
						</text>
					</view>
				</view>
			</view>
			<view class="item">
				<image src="../../static/logo.png" mode=""></image>
				<view>
					<text>阿里巴巴集团</text>
					<text>移动互联网·B轮·0-99人</text>
				</view>
			</view>
			<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		</view>
		<view class="btn">获取联系方式</view>
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
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F6F6F6;
}
.content{
	width: 700upx;
	padding: 26upx 26upx 110upx;
	background-color: #FFFFFF;
	.item{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 30upx 0;
		
		border-bottom: 1upx solid #EEEEEE;
		&:last-of-type{
			border: none;
		}
		image{
			width: 82upx;
			height: 82upx;
		}
		>view{
			width: 590upx;
			text{
				display: block;
				color: #343434;
				font-size: 30upx;
				&:last-of-type{
					color: #565656;
					font-size: 24upx;
					margin-top: 6upx;
				}
			}
		}
		
	}
	.info{
		width: 100%;
		padding: 30upx 0;
		background-color: #FFFFFF;
		border-bottom: 1upx solid #EEEEEE;
		.title{
			color: #343434;
			font-size: 30upx;
			display: block;
			margin-bottom: 14upx;
		}
		view{
			>text{
				color: #565656;
				font-size: 28upx;
				line-height: 48upx;
			}
		}
		.center{
			color: #565656;
			font-size: 24upx;
			display: block;
			margin-bottom: 6upx;
		}
		.money{
			display: block;
			color: #FF0000;
			font-size: 30upx;
		}
	}
	.map{
		width: 100%;
		height: 284upx;
		border-radius: 10upx;
	}
}
</style>
