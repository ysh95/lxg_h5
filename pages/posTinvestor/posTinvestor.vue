<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>行业类型</label>
				<input type="text" value="" data-name="industry" @input="getSetData" placeholder="请填写行业类型" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>投资方式</label>
				<input type="text" value="" data-name="way" @input="getSetData" placeholder="请填写投资方式" placeholder-class="placeholderSty" />
			</view>
			
			<view class="item">
				<label>所 在 地</label>
				<input type="text" value="" data-name="address" @input="getSetData" placeholder="请填写所在地" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>投资金额</label>
				<input type="text" value="" data-name="price" @input="getSetData" placeholder="请填写投资金额" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form four">
			<view class="item">
				<label>联系人单位</label>
				<input type="text" value="" data-name="company" @input="getSetData" placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>联系人姓名</label>
				<input type="text" value="" data-name="contacts" @input="getSetData" placeholder="请填写姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购人电话</label>
				<input type="number" value="" data-name="mobile" @input="getSetData" placeholder="请填写联系方式" placeholder-class="placeholderSty" />
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
			  industry: '',
        way: '',
        address: '',
        price: '',
        contacts: '',
        company: '',
        mobile: ''
			}
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
    submit() {
      const that = this
      let formNode = that.formNode
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
      	url: `${that.URL}/api/addInvestment`,
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
			width: 500upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 20upx;
			color: #898989;
			font-size: 24upx;
			// height: 64upx;
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
.four {
	.item {
		input {
			width: 480upx !important;
		}
	}
}
</style>
