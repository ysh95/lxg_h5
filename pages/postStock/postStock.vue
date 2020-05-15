<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>项目名称</label>
				<input type="text" value="" placeholder="请填写项目名称" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label>所属行业</label>
				<input type="text" value="" placeholder="请填写所属行业" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>行业性质</label>
				<input type="text" value="" placeholder="请填写职行业性质" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>融资主体</label>
				<input type="text" value="" placeholder="请填写融资主体" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>投资金额</label>
				<input type="text" value="" placeholder="请填写投资金额" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form four">
			<view class="item">
				<label style="letter-spacing: 7upx;">所在地区</label>
				<input type="text" value="" placeholder="请填写所在地区" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>去年营业额</label>
				<input type="number" value="" placeholder="请填写去年营业额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>企业净资产</label>
				<input type="number" value="" placeholder="请填写企业净资产" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 7upx;">融资金额</label>
				<input type="number" value="" placeholder="请填写融资金额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 7upx;">总投金额</label>
				<input type="number" value="" placeholder="请填写总投金额" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form" style="margin-bottom: 90upx;">
			<view class="item">
				<label>融资用途</label>
				<input type="number" value="" placeholder="请填写融资用途" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label>意向资金</label>
				<input type="number" value="" placeholder="请填写意向资金" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label style="letter-spacing: 10upx;">联系人</label>
				<input type="number" value="" placeholder="请填写联系人" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label>联系电话</label>
				<input type="number" value="" placeholder="请填写联系电话" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label>融资方式</label>
				<input type="number" value="" placeholder="请填写融资方式" placeholder-class="placeholderSty" />
			</view>

			<view class="item">
				<label>项目概述</label>
				<input type="number" value="" placeholder="请填写项目概述" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 10upx;">计划书</label>
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
		.pickerT {
			width: 500upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 20upx;
			color: #898989;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			image {
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
.four{
	.item{
		
		input{
			width: 480upx;
		}
	}
}
</style>
