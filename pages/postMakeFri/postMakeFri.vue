<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
				<input type="text" value="" placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 别</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
				</picker>
				<!-- <input type="text" value="" placeholder="请填写薪资待遇" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 日</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">所 在 地</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目名称*" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 座</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">手 机 号</label>
				<input type="number" value="" placeholder="请填写手机号" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 高</label>
				<input type="number" value="" placeholder="请填写身高" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">月 收 入</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>工作职位</label>
				<input type="number" value="" placeholder="请填写工作职位" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>我的学历</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>婚姻状况</label>
				<input type="text" value="" placeholder="请填写婚姻状况" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>考虑小孩</label>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>个人签名</label>
				<textarea class="textarea" value="" placeholder="请填写个人签名" placeholder-class="placeholderSty"/>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>其他资料</label>
				<textarea class="textarea" value="" placeholder="请填写其它资料，请用：隔开，例如：是否买房" placeholder-class="placeholderSty"/>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>择偶标准</label>
				<textarea class="textarea" value="" placeholder="请填写择偶标准，请用：隔开，例如：是否买房" placeholder-class="placeholderSty"/>
			</view>
			<view class="item">
				<label>上传照片</label>
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
	padding: 26upx 26upx 94upx;
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
				margin-right: 10upx;
			}
		}
	}
}
</style>
