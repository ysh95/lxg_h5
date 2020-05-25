<script>
	import {
		login
	} from './static/js/base.js'
	export default {
		onLaunch: function() {
			// #ifdef MP-WEIXIN
			// var that = this
			// uni.getSetting({
			// 	success(res) {
			// 		if (res.authSetting['scope.userInfo']) {
			// 			uni.getUserInfo({
			// 				success(res) {
			// 					that.$store.commit('setUserInfo', res.userInfo)
			// 					login()
			// 				}
			// 			})
			// 		}
			// 	}
			// })
			// #endif
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import 'static/icon/icon.css'; */

	page {
		font-size: 28upx;
	}

	/* 滚动条样式去除 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	/* 超出两行打点 */
	.overflow-two {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	/* 超出一行打点 */
	.overflow-one {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* button 样式初始化 */
	button {
		font-size: 28upx;
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
		line-height: 1;
		text-align: left;
		border-radius: 0;
	}

	button::after {
		border: none;
	}

	input {
		outline: none;
		border: none;
		list-style: none;
		font-size: 20upx;
		color: #333;
	}

	.search-placeholder {
		color: #999999;
		font-size: 24upx;
		font-weight: 400 !important;
	}
	.btn {
		position: fixed;
		bottom: 0;
		left: 0;
		color: #fff;
		background: linear-gradient(0deg, rgba(17, 115, 231, 1), rgba(1, 84, 179, 1));
		font-size: 30upx;
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		font-weight: bold;
		z-index: 99;
	}
	.line{
		width: 750upx;
		background-color: #F6F6F6;
		height: 20upx;
	}
  /* 无列表 */
  .notList {
    width: 100%;
    height: auto;
    padding: 50rpx 0;
    font-size: 30rpx;
    color: #999;
    text-align: center;
  }
</style>
