<template>
	<view class="job">
		<view class="content">
			<view class="top">
				<view class="title">
					<text>{{info.title}}</text>
					<text>{{info.money}}</text>
				</view>
				<text>{{info.adder}}  | {{info.time}} | {{info.edu}}</text>
				<text>联系方式： {{info.tel}}</text>
			</view>
			<view class="bottom">
				<text>我的简历</text>
				<image src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="btn">获取联系方式</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					title: 'Java',
					money: '10K-30K',
					adder: '西安',
					time: '3-5年工作经验',
					edu: '本科',
					tel: '130****0000'
				}
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
</style>
