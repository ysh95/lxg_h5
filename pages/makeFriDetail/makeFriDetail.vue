<template>
	<view class="want">
		<view class="item">
			<view class="title">个人信息</view>
			<view class="info">
				<view class="top">
					<image :src="IMG_URL+info.avatar" mode=""></image>
					<view class="right">
						<text>{{info.name}}</text>
						<view>
							<text>{{info.address}} </text>
							<text>年龄： {{info.age}} </text>
							<text>手机号： {{info.mobile}} </text>
						</view>
					</view>
				</view>
				<view class="every">
					<text class="tip">{{info.marriage}}</text>
					<text class="tip">{{info.height}}</text>
					<text class="tip">月收入：{{info.income}}</text>
					<text class="tip">{{info.work}}</text>
					
				</view>
			</view>
		</view>
		<view class="item">
			<view class="title">个性签名</view>
			<text class="textLine">{{info.signature}}</text>
		</view>
		<view class="item">
			<view class="title">相册</view>
			<view class="image">
				<image :src="IMG_URL+item" v-for="(item,index) in info.album" :key='index' mode=""></image>
			</view>
		</view>
		<view class="item">
			<view class="title">其他资料</view>
			<view class="every">
				<text class="tip" v-if="strType == 'string'">{{info.others}}</text>
				<text class="tip" v-else v-for="(item,index) in info.others" :key="index">{{item}}</text>
			</view>
		</view>
		<view class="item" style="margin-bottom: 110upx;">
			<view class="title">择偶标准</view>
			<view class="every">
				<text class="tip" v-if="strType1 == 'string'">{{info.standard}}</text>
				<text class="tip" v-else v-for="(item,index) in info.standard" :key="index">{{item}}</text>
			</view>
		</view>
		<view class="btn" @tap="submit">获取联系方式</view>
		
		<uni-popup ref="popup" type="center">
			<view class="vip-box">
				<view class="close" @click="close">×</view>
				<view class="text">
					<text>发布信息</text>
					<text>请先发布一条供求信息，即可查看联系方式</text>
				</view>
				<view class="fot">
					<view @click="navMembership">立即发布</view>
					<view class="cancel" @click="close">取消发布</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { ajax } from '@/static/js/base.js';
	import api from '@/static/js/api.js';	
export default {
	data() {
		return {
			info:{},
			strType:'',
			strType1: ''
		};
	},
	onLoad(e) {
		this.id = e.id
		ajax({
			url: api.getBlindDateInfo,
			type: "POST",
			data: {
				id: this.id
			},
		}).then(res => {
			if (res.status_code == "ok") {
				console.log(res)
				this.info = res.data
				this.strType =typeof this.info.others
				this.strType1 = typeof this.info.standard
				console.log(this.strType)
			}
		})
	},
	methods: {
		open(){
			 this.$refs.popup.open()
		},
		submit() {
			ajax({
				url: api.getBlindDateDetails,
				type: "POST",
				data: {
					id: this.id
				},
			}).then(res => {
				if (res.status_code == "ok") {
					console.log(res)
					this.info.mobile = res.data.mobile
					// this.getInfo()
					// this.info = res.data
				}else if(res.status_code == 'error'){
					this.$refs.popup.open();
				}else{
					uni.showToast({
						title:res.message,
						icon:'none'
					})
				}
			})
		},
		close() {
			this.$refs.popup.close()
		},
		navMembership(){
			uni.navigateTo({
				url:'../postMakeFri/postMakeFri'
			})
			this.$refs.popup.close()
		},
	}
};
</script>

<style lang="scss">
page {
	background-color: #F6F6F6;
}
.want {
	width: 750upx;
	// padding: 26rpx 0;
}
.item {
	width: 700upx;
	padding: 26upx 26upx 0;
	background-color: #ffffff;
	margin-top: 20upx;
	>image{
		width: 100%;
		height: 300upx;
	}
	.textLine {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: pre-wrap;
		color: #333333;
		font-size: 28upx;
		padding: 0 10upx;
	}
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
	.image{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		image{
			width: 156upx;
			height: 156upx;
			border-radius: 8upx;
			margin:0 24upx 18upx 0;
			&:nth-of-type(4n){
				margin-right: 0;
			}
		}
	}
	.info{
		.top{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 14upx;
			image{
				width: 82upx;
				height: 82upx;
				border-radius: 6upx;
			}
		}
		.right{
			width: 590upx;
			>text{
				color: #343434;
				font-size: 30upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			>view{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 6upx;
				text{
					color: #565656;
					font-size: 24upx;
				}
			}
		}
	}
	.every {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 18upx;
		text{
			display: block;
			background-color: #F6F6F6;
			padding: 2upx 18upx;
			border-radius: 8upx;
			color: #898989;
			font-size: 20upx;
			margin-right: 10upx;
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
.bottom{
	width: 700upx;
	padding: 0 26upx;
	height: 110upx;
	background-color: #FFFFFF;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	text{
		width: 310upx;
		height: 90upx;
		display: block;
		text-align: center;
		line-height: 90upx;
		border: 1upx solid #0076FF;
		color: #0076FF;
		border-radius: 8upx;
		font-size: 28upx;
		&:first-of-type{
			background: linear-gradient(#1173E7,#0154B3);
			color: #FFFFFF;
			border: none;
		}
	}
}
</style>
