<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>采购产品</label>
				<input type="text" value="" data-name="product" @input="getSetData" placeholder="请填写采购产品名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购数量</label>
				<input type="text" value="" data-name="num" @input="getSetData" placeholder="请填写采购数量" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>产品规格</label>
				<input type="text" value="" data-name="product_spec" @input="getSetData" placeholder="请填写产品规格" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>项目名称</label>
				<input type="text" value="" data-name="project" @input="getSetData" placeholder="请填写项目名称*" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>项目地址</label>
				<input type="text" value="" data-name="address" @input="getSetData" placeholder="请填写项目地址" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>预算金额</label>
				<input type="number" value="" data-name="amount_of_money" @input="getSetData" placeholder="请填写预算金额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>结款方式</label>
				<view class="radioGroup">
					<view class="" @tap="pay(1)">
						<image src="../../static/img/img1.png" class="section" v-if="formNode.method == '1'"></image>
					  <image src="../../static/img/img2.png" class="section" v-else></image>
						<text>现结</text>
					</view>
					<view class="" @tap="pay(2)">
					  <image src="../../static/img/img1.png" class="section" v-if="formNode.method == '2'"></image>
					  <image src="../../static/img/img2.png" class="section" v-else></image>
					  <text>分期</text>
					</view>
				</view>
			</view>
			<view class="item">
				<label>采购期限</label>
				<view class="radioGroup">
          <view class="" @tap="buyType(1)">
          	<image src="../../static/img/img1.png" class="section" v-if="formNode.purchase_period == '1'"></image>
            <image src="../../static/img/img2.png" class="section" v-else></image>
          	<text>单次采购</text>
          </view>
          <view class="" @tap="buyType(2)">
            <image src="../../static/img/img1.png" class="section" v-if="formNode.purchase_period == '2'"></image>
            <image src="../../static/img/img2.png" class="section" v-else></image>
            <text>长期采购</text>
          </view>
				</view>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>产品描述</label>
				<textarea class="textarea" value="" data-name="product_description" @input="getSetData" placeholder="请填写采购产品描述信息" placeholder-class="placeholderSty" />
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>上传图片</label>
				<view class="imgList">
					<image :src="item" mode="" v-for="(item, index) in imagesShow" :key="index"></image>
					<image src="../../static/img/img3.png" mode="" @tap="uploadImg" v-if="images.length < 9"></image>
				</view>
			</view>
		</view>
		<view class="form five">
			<view class="item">
				<label>供货商地区</label>
				<input type="text" value="" data-name="area" @input="getSetData" placeholder="请填写供货商地区" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>供货商品牌</label>
				<input type="text" value="" data-name="brand" @input="getSetData" placeholder="请填写供货商品牌" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form five" style="margin-bottom: 90upx;">
			<view class="item">
				<label>采购人单位</label>
				<input type="text" value="" data-name="company" @input="getSetData" placeholder="请填写采购人单位" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购人姓名</label>
				<input type="text" value="" data-name="name" @input="getSetData" placeholder="请填写采购人姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购人电话</label>
				<input type="number" value="" data-name="mobile" @input="getSetData" placeholder="请填写采购人电话" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>是否紧急</label>
				<view class="radioGroup">
						<view class="" @tap="urgentType(2)">
							<image src="../../static/img/img1.png" class="section" v-if="formNode.state == '2'"></image>
              <image src="../../static/img/img2.png" class="section" v-else></image>
							<text>紧急</text>
						</view>
            <view class="" @tap="urgentType(1)">
            	<image src="../../static/img/img1.png" class="section" v-if="formNode.state == '1'"></image>
            	<image src="../../static/img/img2.png" class="section" v-else></image>
            	<text>不紧急</text>
            </view>
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
        product: '',
        num: '',
        product_spec: '',
        project: '',
        address: '',
        amount_of_money: '',
        product_description: '',
        images: '',
        area: '',
        brand: '',
        company: '',
        name: '',
        mobile: '',
        method: '',
        purchase_period: '',
				state: ''
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
		pay(e) {
			this.formNode.method = e;
		},
		buyType(e) {
			this.formNode.purchase_period = e;
		},
		urgentType(e) {
			this.formNode.state = e;
		},
		uploadImg() {
			const that = this;
			let count = 9 - that.images.length;
			wx.chooseImage({
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
                      disk: 'purchase'
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
      formNode.images = that.images.toString()
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
      	url: `${that.URL}/api/addPurchase`,
      	type: "POST",
        data: formNode
      }).then(res => {
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
			width: 520upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 10upx;
			color: #898989;
			font-size: 24upx;
			// height: 64upx;
		}
		.placeholderSty {
			color: #898989;
			font-size: 24upx;
		}
		.radioGroup {
			width: 540upx;
			display: flex;
			justify-content: flex-start;
			view {
				display: flex;
				align-items: center;
				margin-right: 50upx;
				image {
					width: 36upx;
					height: 36upx;
					border-radius: 50%;
					margin-right: 10upx;
				}
			}
			// background-color: #007AFF;
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
.five {
	.item {
		input {
			width: 500upx;
		}
	}
}
</style>
