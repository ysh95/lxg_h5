<template>
	<view class="recruit">
		<view class="content">
			<view class="info">
				<text class="title">{{info.post_name}}</text>
				<text class="center">{{info.post_address}} | {{info.post_experience}}  | {{info.post_education}} </text>
				<text class="money">{{info.post_salary}}</text>
			</view>
			<view class="item">
				<image :src="IMG_URL+info.hr_avatar" mode=""></image>
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
		onLoad(e) {
			this.id = e.id
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
					}
				})
			},
			close() {
				this.$refs.popup.close();
			}
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
