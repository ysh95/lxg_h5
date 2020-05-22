<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>项目名称</label>
				<input type="text" value="" placeholder="请填写项目名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>行业类型</label>
				<input type="text" value="" placeholder="请填写行业类型" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>加盟金额</label>
				<input type="text" value="" placeholder="请填写加盟金额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>申请人数</label>
				<input type="number" value="" placeholder="请填写申请人数" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>项目描述</label>
				<textarea class="textarea" value="" placeholder="请填写项目描述" placeholder-class="placeholderSty"/>
			</view>
		</view>
		<view class="form">
			<view class="item">
				<label>单位名称</label>
				<input type="text" value="" placeholder="请填写单位名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">联 系 人</label>
				<input type="text" value="" placeholder="请填写联系人" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系电话</label>
				<input type="number" value="" placeholder="请填写联系电话" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>图片上传</label>
				<view class="imgList"><image src="../../static/img/img3.png" mode=""></image></view>
			</view>
		</view>
		<view class="btn" @tap="submit">发布</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			array: ['中国', '美国', '巴西', '日本'],
			index: 0
		};
	},
	methods: {}
};
</script>

<style lang="scss">
page {
	background: #f6f6f6;
}
.post {
	width: 750upx;
}
.form {
	width: 700upx;
	padding: 26upx;
	margin-top: 20upx;
	background-color: #ffffff;
	.item {
		margin-bottom: 36upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:last-of-type {
			margin-bottom: 0;
		}
		label {
			color: #343434;
			font-size: 28upx;
			&:after {
				content: '*';
				color: #ff0000;
				font-size: 28upx;
			}
		}
		input {
			width: 500upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 20upx;
			color: #898989;
			font-size: 24upx;
			// height: 64upx;
		}
		.pickerT{
			width: 500upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 20upx;
			color: #898989;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: 14upx;
				height: 8upx;
			}
		}
		.placeholderSty {
			color: #898989;
			font-size: 24upx;
		}
		.textarea {
			width: 520upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 10upx;
			color: #898989;
			font-size: 24upx;
			height: 200upx;
		}
		.imgList {
			width: 540upx;
			display: flex;
			image {
				width: 102upx;
				height: 96upx;
				// background-color: #007AFF;
				margin-right: 10upx;
			}
		}
	}
}
</style>
