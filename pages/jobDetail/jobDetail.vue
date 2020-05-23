<template>
	<view class="job">
		<view class="content">
			<view class="top">
				<view class="title">
					<text>{{info.post_name}}</text>
					<text>{{info.salary}}</text>
				</view>
				<text>{{info.address}}  | {{info.experience}} | {{info.education}}</text>
				<text>联系方式： {{info.mobile}}</text>
			</view>
			<view class="bottom">
				<text>我的简历</text>
				<image :src="IMG_URL+info.resume" mode="widthFix"></image>
			</view>
		</view>
		<view class="btn" @tap="getDetail()">获取联系方式</view>
		<uni-popup ref="popup" type="center">
			<view class="vip-box">
				<view class="close" @click="close">×</view>
				<view class="text">
					<text>发布信息</text>
					<text>请先发布一条供求信息，即可查看联 系方式</text>
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
	import {
		ajax,
	} from '@/static/js/base.js'
	import api from '@/static/js/api.js'
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad(e) {
			this.id = e.id
			ajax({
				url: api.getJobWantedInfo,
				type: "POST",
				data: {
					id: this.id
				},
			}).then(res => {
				if (res.status_code == "ok") {
					console.log(res)
					this.info = res.data
				}
			})
		},
		methods: {
			getDetail(){
				ajax({
					url: api.getJobWantedDetails,
					type: "POST",
					data: {
						id: this.id
					},
				}).then(res => {
					if (res.status_code == "ok") {
						console.log(res)
						this.info.mobile = res.data.mobile
					}else if(res.status_code == 'error'){
						this.$refs.popup.open();
					}
				})
			},
			close() {
				this.$refs.popup.close();
			},
			navMembership(){
				uni.navigateTo({
					url:'../postJob/postJob'
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F6F6F6;
}
.job{
	width: 750upx;
}
.content{
	width: 700upx;
	padding-bottom: 90upx;
	background-color: #FFFFFF;
	padding: 26upx;
	margin-top: 20upx;
	.top{
		width: 100%;
		border-bottom: 1upx solid #EEEEEE;
		padding-bottom: 30upx;
		.title{
			width: 100%;
			display: flex;
			justify-content: space-between;
			text{
				color: #343434;
				font-size: 30upx;
				&:last-of-type{
					color: #FF0000;
				}
			}
		}
		>text{
			color: #565656;
			font-size: 24upx;
			display: block;
			margin-top: 6upx;
		}
	}
	.bottom{
		width: 100%;
		padding-top: 30upx;
		text{
			color: #343434;
			font-size: 30upx;
			display: block;
			margin-bottom: 20upx;
		}
		image{
			width: 100%;
			height: 100%;
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
