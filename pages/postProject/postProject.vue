<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>项目名称</label>
				<input type="text" value="" data-name="project_name" @input="getSetData" placeholder="请填写项目名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>行业类型</label>
				<input type="text" value="" data-name="industry" @input="getSetData" placeholder="请填写行业类型" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>加盟金额</label>
				<input type="text" value="" data-name="amount_of_money" @input="getSetData" placeholder="请填写加盟金额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>申请人数</label>
				<input type="number" value="" data-name="apply_num" @input="getSetData" placeholder="请填写申请人数" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>项目描述</label>
				<textarea class="textarea" value="" data-name="summary" @input="getSetData" placeholder="请填写项目描述" placeholder-class="placeholderSty"/>
			</view>
		</view>
		<view class="form" style="margin-bottom: 60upx;">
			<view class="item">
				<label>单位名称</label>
				<input type="text" value="" data-name="company" @input="getSetData" placeholder="请填写单位名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label style="letter-spacing: 3upx;">联 系 人</label>
				<input type="text" value="" data-name="contacts" @input="getSetData" placeholder="请填写联系人" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系电话</label>
				<input type="number" value="" data-name="mobile" @input="getSetData" placeholder="请填写联系电话" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>图片上传</label>
				<view class="imgList">
					<image :src="item" mode="" v-for="(item, index) in imagesShow" :key="index"></image>
					<image src="../../static/img/img3.png" mode="" @tap="uploadImg" v-if="imagesShow.length == 0"></image>
				</view>
			</view>
		</view>
		<view class="btn" @tap="submit">发布</view>
	</view>
</template>

<script>
import { login, ajax, formatDate } from '@/static/js/base.js';
import api from '@/static/js/api.js';
export default {
	data() {
		return {
			URL: '',
			IMG_URL: '',
			formNode: {
			  project_name: '',
			  industry: '',
			  summary: '',
			  amount_of_money: '',
			  apply_num: '',
			  image: '',
			  contacts: '',
			  mobile: '',
			  company: ''
			},
			images: [], // 仅用于上传
			imagesShow: [] // 仅用于显示
		};
	},
  onLoad(options) {
  	const that = this;
  	that.options = options;
  	that.URL = api.URL;
  	that.IMG_URL = api.IMG_URL;
  },
	methods: {
		// 表单数据获取
		getSetData(e) {
			let formNode = this.formNode;
			let name = e.currentTarget.dataset.name;
			let value = e.detail.value;
			formNode[name] = value;
			this.formNode = formNode;
		},
		uploadImg() {
			const that = this;
			let count = 9 - that.images.length;
			wx.chooseImage({
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
                    formData: {
                      disk: 'projected/image'
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
							let imageShow = that.imagesShow;
							let image = that.images;
							for (let i = 0; i < e.length; i++) {
								imageShow.push(`${that.IMG_URL}/${e[i].path}`);
								image.push(e[i].path);
							}
							that.imagesShow = imageShow;
							that.images = image;
						})
						.catch(err => console.log(err));
				}
			});
		},
    submit() {
      const that = this
      let formNode = that.formNode
      formNode.image = that.images.toString()
      console.log(formNode)
      // 非空校验
      for (let key in formNode) {
        if (!formNode[key]) {
          uni.showToast({
              title: '请完善提交信息',
              duration: 2000
          });
          return false
        }
      }
      if (formNode.mobile.length != 11) {
        uni.showToast({
            title: '请完输入完整的手机号',
            duration: 2000
        });
        return false
      }
      ajax({
      	url: `${that.URL}/api/addProject`,
      	type: "POST",
        data: formNode
      }).then(res => {
        console.log(res)
      	if (res.status_code == "ok") {
          uni.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          });
          setTimeout(() => {
            uni.navigateBack()
          }, 2000)
      	} else {
          uni.showToast({
            title: res.message,
            duration: 2000
          });
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
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: row;
			flex-wrap: wrap;
			image {
				width: 134upx;
				height: 134upx;
				// background-color: #007AFF;
				margin-right: 47upx;
				margin-bottom: 30upx;
			}
		}
	}
}
</style>
