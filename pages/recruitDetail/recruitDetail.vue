<template>
	<view class="recruit">
		<view class="content">
			<view class="info">
				<text class="title">{{info.post_name}}</text>
				<text class="center">{{info.post_address}} | {{info.post_experience}}  | {{info.post_education}} </text>
				<text class="money">{{info.post_salary}}元</text>
			</view>
			<view class="item">
				<image :src="info.hr_avatar" mode=""></image>
				<view>
					<view style="display: flex;">
						<text>{{info.hr_name}}</text>
						<text style="margin-left: 20upx;">{{info.hr_mobile}}</text>
					</view>
					<text>{{info.hr_post}}</text>
				</view>
			</view>
			<view class="info">
				<text class="title">职位详情</text>
				<view>
					<!-- <text>岗位职责：</text> -->
					<view class="">
						<text class="">
							{{info.financing}}
						</text>
					</view>
				</view>
			</view>
			<view class="item">
				<image :src="IMG_URL+info.logo" mode=""></image>
				<view>
					<text>{{info.name}}</text>
					<text>{{info.financing}} · {{info.staff}}</text>
				</view>
			</view>
			<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		</view>
		<view class="btn" @tap="getDeteil()">获取联系方式</view>
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
		onShow() {
			
		},
		onLoad(e) {
			this.id = e.id
			ajax({
				url: api.getRecruitInfo,
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
			getDeteil(){
				ajax({
					url: api.getRecruitDetails,
					type: "POST",
					data: {
						id: this.id
					},
				}).then(res => {
					if (res.status_code == "ok") {
						console.log(res)
						this.info.hr_mobile = res.data.hr_mobile
						// this.getInfo()
						// this.info = res.data
					}else if(res.status_code == 'error'){
						this.$refs.popup.open();
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
			close() {
				this.$refs.popup.close();
			},
			navMembership(){
				uni.navigateTo({
					url: '../postRecruit/postRecruit'
				});
			},
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
