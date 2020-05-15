<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>贷款名称</label>
				<input type="text" value="" placeholder="请填写贷款名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>行业类型</label>
				<input type="text" value="" placeholder="请填写行业类型" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>还款方式</label>
				<input type="text" value="" placeholder="请填写还款方式" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>借款利率</label>
				<input type="text" value="" placeholder="请填写借款利率" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>借款额度</label>
				<input type="text" value="" placeholder="请填写借款额度" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form four">
			<view class="item">
				<label>联系人姓名</label>
				<input type="text" value="" placeholder="请填写联系人姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系人电话</label>
				<input type="number" value="" placeholder="请填写联系人电话" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系人单位</label>
				<input type="text" value="" placeholder="请填写联系人单位" placeholder-class="placeholderSty" />
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
			width: 480upx;
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
				margin-right: 10upx;
			}
		}
	}
}
.four{
	.item{
		input{
			width: 480upx;
		}
	}
}
</style>
