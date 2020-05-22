<template>
	<view class="want">
		<view class="item">
			<view class="title">采购信息</view>
			<view class="every four">
				<label>采购产品：</label>
				<text>{{purchaseInfo.product}}</text>
			</view>
			<view class="every four">
				<label>需求数量：</label>
				<text>{{purchaseInfo.product}}</text>
			</view>
			<view class="every four">
				<label>产品规格：</label>
				<text>{{purchaseInfo.product_spec}}</text>
			</view>
		</view>
		<view class="item">
			<view class="every four">
				<label>项目名称：</label>
				<text>{{purchaseInfo.project}}</text>
			</view>
			<view class="every four">
				<label>项目地址：</label>
				<text>{{purchaseInfo.address}}</text>
			</view>
			<view class="every four">
				<label>预算资金：</label>
				<text>{{purchaseInfo.amount_of_money}}</text>
			</view>
			<view class="every four">
				<label>结算方式：</label>
				<text v-if="purchaseInfo.method == 1">现结</text>
				<text v-else-if="purchaseInfo.method == 2">分期</text>
			</view>
			<view class="every four">
				<label>采购期限：</label>
				<text v-if="purchaseInfo.purchase_period == 1">单次采购</text>
				<text v-else-if="purchaseInfo.purchase_period == 2">长期采购</text>
			</view>
			<view class="every four" style="align-items: flex-start;">
				<label>其他说明：</label>
				<text class="textLine">{{purchaseInfo.product_description}}</text>
			</view>
			<view class="every four" style="align-items: flex-start;">
				<label>图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 片：</label>
				<view class="img">
					<image :src="item" mode="" v-for="(item, index) in purchaseInfo.images" :key="index"></image>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="title">供应商信息</view>
			<view class="every">
				<label>供应商地区：</label>
				<text>{{purchaseInfo.area}}</text>
			</view>
			<view class="every">
				<label>品牌要求：</label>
				<text>{{purchaseInfo.area}}</text>
			</view>
		</view>
		<view class="item" style="margin-bottom: 90upx;">
			<view class="title">联系方式</view>
			<view class="every">
				<label>采购人姓名：</label>
				<text>{{purchaseInfo.name}}</text>
			</view>
			<view class="every">
				<label>采购人电话：</label>
				<text>{{purchaseInfo.mobile}}</text>
			</view>
			<view class="every">
				<label>采购人单位：</label>
				<text>{{purchaseInfo.company}}</text>
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
					<view class="cancel" @click="close">取消发布</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { login, ajax, formatDate } from '@/static/js/base.js';
import api from '@/static/js/api.js';
export default {
	data() {
		return {
			options: {
				id: ''
			},
			URL: '',
			IMG_URL: '',
			purchaseInfo: {}
		};
	},
	onLoad(options) {
		// console.log(options);
		const that = this;
		that.options = options;
		that.URL = api.URL
		that.IMG_URL = api.IMG_URL
		
		
		
		ajax({
			url: api.home_news_xg,
			data: {
				id: that.options.id
			}
		}).then(res => {
			if (res.status_code == 'ok') {
				let purchaseInfo = res.data;
				for (let i = 0; i < purchaseInfo.images.length; i++) {
					purchaseInfo.images[i] = `${that.IMG_URL}/${purchaseInfo.images[i]}`;
				}
				that.purchaseInfo = purchaseInfo;
			}
		});
	},
	methods: {
		open() {
			this.$refs.popup.open();
		},
		submit() {
			const that = this;
			// this.$refs.popup.open();
			// 获取联系方式
			ajax({
				url: api.home_get_contact,
				data: {
					id: that.options.id
				}
			}).then(res => {
				console.log(res)
				if (res.status_code == 'ok') {
					let info = res.data
					that.purchaseInfo.name = info.name
					that.purchaseInfo.mobile = info.mobile
					that.purchaseInfo.company = info.company
				} else if (res.status_code == 'user_error') {
					// 用户登录已过期
				} else if (res.status_code == 'error') {
					this.$refs.popup.open();
				}
			});
		},
		close() {
			this.$refs.popup.close();
		}
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

</style>
