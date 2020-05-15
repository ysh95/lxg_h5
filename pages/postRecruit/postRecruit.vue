<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>岗位名称</label>
				<input type="text" value="" placeholder="请填写岗位名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>薪资待遇</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
				</picker>
				<!-- <input type="text" value="" placeholder="请填写薪资待遇" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>工作地点</label>
				<input type="text" value="" placeholder="请填写工作地点" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>学历要求</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目名称*" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>工作经验</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>

			<view class="item" style="align-items: flex-start;">
				<label>职位详情</label>
				<textarea class="textarea" value="" placeholder="请填写职位描述信息" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form">
			<view class="item">
				<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
				<input type="text" value="" placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系方式</label>
				<input type="number" value="" placeholder="请填写联系方式" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>公司名称</label>
				<input type="number" value="" placeholder="请填写公司名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>岗位名称</label>
				<input type="number" value="" placeholder="请填写岗位名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 像</label>
				<view class="imgList"><image src="../../static/img/img3.png" mode=""></image></view>
			</view>
		</view>
		<view class="form" style="margin-bottom: 90upx;">
			<view class="item">
				<label>融资规模</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写采购人单位" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>员工规模</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写采购人姓名" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>公司地址</label>
				<input type="number" value="" placeholder="请填写公司地址" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>logo名称</label>
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
