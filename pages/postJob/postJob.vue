<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>求职岗位</label>
				<input type="text" value="" data-name='post_name' @input="inputValue" placeholder="请填写求职岗位" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>期望待遇</label>
				<!-- <picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
				</picker> -->
				<input type="text" value="" data-name='salary' @input="inputValue" placeholder="请填写薪资待遇" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>工作地点</label>
				<input type="text" value="" data-name='address' @input="inputValue" placeholder="请填写工作地点" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>我的学历</label>
				<picker @change="eduChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ formNode.education}}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目名称*" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>工作经验</label>
				<picker @change="jobChange" :value="jobIndex" :range="jobTime">
					<view class="pickerT">
						<view class="uni-input">{{ formNode.experience }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>我的简历</label>
				<view class="imgList">
					<image :src="IMG_URL+formNode.resume" mode=""  @tap="uploadImg" v-if="formNode.resume != ''"></image>
					<image src="../../static/img/img3.png" mode="" @tap="uploadImg" v-else></image>
				</view>
			</view>
		</view>
		<view class="form">
			<view class="item">
				<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
				<input type="text" value="" data-name='name' @input="inputValue" placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系方式</label>
				<input type="number" value="" data-name='mobile' @input="inputValue" placeholder="请填写联系方式" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="btn" @tap="submit">发布</view>
	</view>
</template>

<script>
	import {
		ajax,
	} from '@/static/js/base.js'
	import api from '@/static/js/api.js'
export default {
	data() {
		return {
			array: ['小学', '初中', '高中', '大专','本科','研究生','硕士'],
			jobTime:['无经验','1-3年工作经验','3-5年工作经验','5年以上'],
			index: 0,
			jobIndex: 0,
			formNode:{
				mobile: '',
				name: '',
				post_name: '',
				salary: '',
				address:'',
				education:'请选择学历',
				experience:'请选择工作经验',
				resume:''
			},
		};
	},
	onLoad() {
		console.log(api.IMG_URL)
	},
	methods: {
		uploadImg() {
			const that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: res => {
					uni.showToast({
						title: '图片上传中',
						icon: 'loading'
					});
					Promise.all(
						res.tempFiles.map(item => {
							return new Promise((resolve, reject) => {
								console.log(item);
								if (item.size > 10000000) {
									// if (item.size > 500) {
									uni.showToast({
										title: '上传图片不能大于5兆',
										icon: 'none',
										duration: 2000
									});
								} else {
									uni.uploadFile({
										url: api.home_upload_img,
										filePath: item.path,
										name: 'image',
										formData:{
											'disk': 'jobwanted'
										},
										header: {
											// Authorization: this.$parent.globalData.token
										},
										success: res => {
											resolve({
												path: JSON.parse(res.data).data
											});
										}
									});
								}
							});
						})
					)
						.then(e => {
							uni.hideToast();
							console.log(e);
							// let image = that.formNode.resume;
							that.formNode.resume = e[0].path;
							console.log(that.formNode.resume)
						})
						.catch(err => console.log(err));
				}
			});
		},
		jobChange(e){
			this.formNode.experience = this.jobTime[e.target.value]
		},
		eduChange(e){
			this.formNode.education	 = this.array[e.target.value]
		},
		inputValue(e){
			let formNode = this.formNode;
			let name = e.currentTarget.dataset.name;
			let value = e.detail.value;
			formNode[name] = value;
			this.formNode = formNode;
		},
		submit(){
			console.log(this.formNode)
			if(this.formNode.post_name == ''){
				uni.showToast({
					title: '请填写求职岗位',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.salary == ''){
				uni.showToast({
					title: '请填写薪资待遇',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.address == ''){
				uni.showToast({
					title: '请填写工作地点',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.education == '请选择学历'){
				uni.showToast({
					title: '请填写学历',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.experience == '请选择工作经验'){
				uni.showToast({
					title: '请填写工作经验',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.resume == ''){
				uni.showToast({
					title: '请上传简历图片',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.name == ''){
				uni.showToast({
					title: '请填写姓名',
					icon: 'none'
				})
				return false
			}
			if(this.formNode.mobile == ''){
				uni.showToast({
					title: '请填写联系方式',
					icon: 'none'
				})
				return false
			}
			ajax({
				url: api.addJobWanted,
				type: "POST",
				data: this.formNode,
			}).then(res => {
				if (res.status_code == "ok") {
					console.log(res)
					uni.showToast({
						title: res.message,
						icon:'none'
					})
					setTimeout( e =>{
						uni.navigateBack({
							delta:1
						})
					},2000)
					// this.info = res.data
				}
			})
		}
	}
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
				margin-right: 10upx;
			}
		}
	}
}
</style>
