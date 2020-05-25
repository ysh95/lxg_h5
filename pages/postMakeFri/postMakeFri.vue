<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 像</label>
				<view class="imgList">
					<image :src="IMG_URL+formNode.avatar" v-if="formNode.avatar != ''" mode="" @tap="upload()"></image>
					<image src="../../static/img/img3.png" mode="" v-else @tap="upload()"></image>
				</view>
			</view>
			<view class="item">
				<label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名</label>
				<input type="text" value="" data-name='name' @input="inputValue"placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 龄</label>
				<input type="text" value="" data-name='age' @input="inputValue"placeholder="请填写年龄" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 别</label>
				<picker @change="genderChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ genderShow }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
				</picker>
				<!-- <input type="text" value="" placeholder="请填写薪资待遇" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 日</label>
				<input type="text" value="" data-name='birthday' @input="inputValue" placeholder="请填写生日" placeholder-class="placeholderSty"/>
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">所 在 地</label>
<!-- 				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="pickerT">
						<view class="uni-input">{{ array[index] }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker> -->
				<input type="text" value="" data-name='address' @input="inputValue" placeholder="请填写所在地" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 座</label>
				<picker @change="xzChange" :value="xzIndex" :range="xzList">
					<view class="pickerT">
						<view class="uni-input">{{ formNode.constellation }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">手 机 号</label>
				<input type="number" value="" data-name='mobile' @input="inputValue" placeholder="请填写手机号" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 高</label>
				<input type="text" value="" data-name='height' @input="inputValue" placeholder="请填写身高" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">月 收 入</label>
				<input type="text" value="" data-name='income' @input="inputValue" placeholder="请填写收入" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>工作职位</label>
				<input type="text" value="" data-name='work' @input="inputValue" placeholder="请填写工作职位" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>我的学历</label>
				<picker @change="eduChange" :value="eduIndex" :range="eduList">
					<view class="pickerT">
						<view class="uni-input">{{ formNode.education }}</view>
						<image src="../../static/img/img48.png" mode=""></image>
					</view>
					
				</picker>
				<!-- <input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" /> -->
			</view>
			<view class="item">
				<label>婚姻状况</label>
				<input type="text" value="" data-name='marriage' @input="inputValue" placeholder="请填写婚姻状况" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>考虑小孩</label>
				<input type="text" value="" data-name='child' @input="inputValue" placeholder="请填写是否考虑要小孩" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>个人签名</label>
				<textarea class="textarea" value="" data-name='signature' @input="inputValue" placeholder="请填写个人签名" placeholder-class="placeholderSty"/>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>其他资料</label>
				<textarea class="textarea" value="" data-name='others' @input="inputValue" placeholder="请填写其它资料，请用：隔开，例如：是否买房" placeholder-class="placeholderSty"/>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>择偶标准</label>
				<textarea class="textarea" value="" data-name='standard' @input="inputValue" placeholder="请填写择偶标准，请用：隔开，例如：是否买房" placeholder-class="placeholderSty"/>
			</view>
			<view class="item">
				<label>上传相册</label>
				<view class="imgList">
					<image :src="IMG_URL+item" v-for="(item,index) in formNode.album" mode=""></image>
					<image src="../../static/img/img3.png" mode="" v-if="formNode.album.length<6" @tap="uploadImg()"></image>
				</view>
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
			array: ['男', '女'],
			xzList: ['天蝎座','白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','射手座','摩羯座','水瓶座','双鱼座'],
			eduList: ['小学', '初中', '高中', '大专','本科','研究生','硕士'],
			eduIndex: 0,
			index: 0,
			xzIndex:0,
			formNode:{
				name: '',
				gender: '',
				birthday: '',
				address: '',
				constellation: '请选择星座',
				mobile: '',
				height: '',
				income: '',
				work: '',
				education: '请选择学历',
				marriage: '',
				child: '',
				signature: '',
				others: '',
				standard: '',
				album:[],
				avatar: '',
				age: ''
			},
			genderShow: '请选择性别'
		};
	},
	methods: {
		inputValue(e){
			let formNode = this.formNode;
			let name = e.currentTarget.dataset.name;
			let value = e.detail.value;
			formNode[name] = value;
			this.formNode = formNode;
		},
		genderChange(e){
			this.genderShow = this.array[e.target.value]
			if(e.target.value == 0){
				this.formNode.gender = 1
			}else if(e.target.value == 1){
					this.formNode.gender = 2
			}
		},
		xzChange(e){
			this.formNode.constellation = this.xzList[e.target.value]
		},
		eduChange(e){
			this.formNode.education = this.eduList[e.target.value]
		},
		upload(){
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
											'disk': 'blinddates/avatar'
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
							that.formNode.avatar = e[0].path
						})
						.catch(err => console.log(err));
				}
			});
		},
		uploadImg() {
			const that = this;
			let count = 6-this.formNode.album.length
			uni.chooseImage({
				count: count,
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
											'disk': 'blinddates/album'
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
							console.log();
							let image = that.formNode.album;
							for (let i = 0; i < e.length; i++) {
								image.push(e[i].path);
							}
							that.formNode.album = image
						})
						.catch(err => console.log(err));
				}
			});
		},
		submit(){
			let formNode = this.formNode
			// album
			// return false
			if(formNode.avatar == ''){
				uni.showToast({
					title: '请上传头像',
					icon: 'none'
				})
				return false
			}
			if(formNode.name == ''){
				uni.showToast({
					title: '请填写姓名',
					icon: 'none'
				})
				return false
			}
			if(formNode.age == ''){
				uni.showToast({
					title: '请填写年龄',
					icon: 'none'
				})
				return false
			}
			if(formNode.gender == '请选择性别'){
				uni.showToast({
					title: '请选择性别',
					icon: 'none'
				})
				return false
			}
			if(formNode.birthday == ''){
				uni.showToast({
					title: '请填写生日',
					icon: 'none'
				})
				return false
			}
			if(formNode.address == ''){
				uni.showToast({
					title: '请填写所在地',
					icon: 'none'
				})
				return false
			}
			if(formNode.constellation == '请选择星座'){
				uni.showToast({
					title: '请选择星座',
					icon: 'none'
				})
				return false
			}
			if(formNode.mobile == ''){
				uni.showToast({
					title: '请填写手机号',
					icon: 'none'
				})
				return false
			}
			if(formNode.mobile.length !='11'){
				uni.showToast({
					title: '请填写正确手机号',
					icon: 'none'
				})
				return false
			}
			if(formNode.height == ''){
				uni.showToast({
					title: '请填写身高',
					icon: 'none'
				})
				return false
			}
			
			if(formNode.income == ''){
				uni.showToast({
					title: '请填写月收入',
					icon: 'none'
				})
				return false
			}
			if(formNode.work == ''){
				uni.showToast({
					title: '请填写工作职位',
					icon: 'none'
				})
				return false
			}
			if(formNode.education == '请选择学历'){
				uni.showToast({
					title: '请选择学历',
					icon: 'none'
				})
				return false
			}
			if(formNode.marriage == ''){
				uni.showToast({
					title: '请填写婚姻状况',
					icon: 'none'
				})
				return false
			}
			if(formNode.child == ''){
				uni.showToast({
					title: '请填写是否考虑要小孩',
					icon: 'none'
				})
				return false
			}
			if(formNode.signature == ''){
				uni.showToast({
					title: '请填写个人签名',
					icon: 'none'
				})
				return false
			}
			if(formNode.others == ''){
				uni.showToast({
					title: '请填写其他资料',
					icon: 'none'
				})
				return false
			}
			if(formNode.standard == ''){
				uni.showToast({
					title: '请填写择偶标准',
					icon: 'none'
				})
				return false
			}
			if(formNode.album.length == 0){
				uni.showToast({
					title: '请上传照片',
					icon: 'none'
				})
				return false
			}
			formNode.album = formNode.album.toString()
			console.log(formNode)
			ajax({
				url: api.addBlindDateInfo,
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
				}else{
					uni.showToast({
						title: res.message,
						icon:'none'
					})
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
			flex-wrap: wrap;
			image {
				width: 102upx;
				height: 96upx;
				margin-right: 10upx;
				margin-bottom: 18upx;
			}
		}
	}
}
</style>
