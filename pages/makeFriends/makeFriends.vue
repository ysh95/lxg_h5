<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" placeholder="请输入搜索内容" />
		</view>
		<view class="tab">
			<text :class="0 == currentIndex ? 'title-sel' : ''" @tap="tab(0)">男</text>
			<text :class="1 == currentIndex ? 'title-sel' : ''" @tap="tab(1)">女</text>
		</view>
		<view class="line"></view>
		<mescroll-uni @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption" top="140upx">
			<view class="content">
				<block v-for="(item, index) in list" :key="index">
					<view class="item" @tap="go(item.id)">
						<image :src="IMG_URL+item.avatar" mode=""></image>
						<view class="rigth">
							<view class="top">
								<text>{{ item.name }}</text>
								<text>{{ item.age }}岁</text>
							</view>
							<view class="center">
								<text>{{ item.signature }}</text>
							</view>
							<view class="bottom">
								<text>{{ item.address }}</text>
								<!-- <text>{{ item.tip }}</text> -->
							</view>
						</view>
					</view>
				</block>
			</view>
		</mescroll-uni>
		<view class="btn" @tap="post(0)">发布相亲/交友信息</view>
	</view>
</template>

<script>
	import { ajax } from '@/static/js/base.js';
	import api from '@/static/js/api.js';
	import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			currentIndex: 0,
			upOption: {
				textNoMore: '木有更多了', // 没有更多数据的提示文本
				empty: {
					tip: '~ 暂无订单内容 ~'
				}
			},
			list: []
		};
	},
	onShow() {
		this.gender = 1;
		this.canReset && this.mescroll && this.mescroll.resetUpScroll();
		this.canReset = true; // 过滤第一次的onShow事件,避免初始化界面时重复触发upCallback
	},
	methods: {
		tab(e) {
			if (this.currentIndex != e) {
				// this.navIdx = e
				this.currentIndex = e;
				this.list = []; // 在这里手动置空列表,可显示加载中的请求进度
				this.mescroll.resetUpScroll(); // 刷新列表数据
			}
		},
		upCallback(mescroll) {
			this.getList(mescroll, curPageData => {
				mescroll.endSuccess(curPageData.length, false);
				if (mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
				this.list = this.list.concat(curPageData);
			});
		},
		getList(mescroll, cb) {
			if (this.currentIndex == 0) {
				this.gender = 1;
			} else {
				this.gender = 2;
			}
			ajax({
				url: api.getBlindDate,
				type: 'GET',
				data: {
					page_size: 10,
					page: mescroll.num,
					gender: this.gender
				}
			}).then(res => {
				if(res.status_code == "ok"){
					var list = res.data.data || [];
					cb(list);
				} else if(res.status_code == "error") {
				  if(res.message == '暂无信息'){
				  	this.list = []
				  	this.mescroll.endByPage(0, 0);
					}
				}
			});
		},
		post(e) {
			if (e == 0) {
				uni.navigateTo({
					url: '../postMakeFri/postMakeFri'
				});
			} else {
				// uni.navigateTo({
				// 	url:'../postJob/postJob'
				// })
			}
		},
		go(e) {
			uni.navigateTo({
				url: `../makeFriDetail/makeFriDetail?id=${e}`
			});
		}
	}
};
</script>

<style lang="scss">
page {
	// background-color: #C0C0C0;
}
.searsh {
	width: 660upx;
	margin: 0 26upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 6upx;
	height: 60upx;
	padding: 0 20upx;
	background-color: #f4f4f4;
	input {
		width: 600rpx;
	}
	image {
		width: 28upx;
		height: 28upx;
	}
}
.tab {
	width: 400upx;
	padding: 0 176upx;
	display: flex;
	justify-content: space-around;
	height: 80upx;
	line-height: 80upx;
	text {
		font-size: 30upx;
		color: #343434;
	}
	.title-sel {
		color: #0076ff;
		border-bottom: 4upx solid #007aff;
	}
}
.content {
	width: 700upx;
	padding: 26upx 26upx 90upx;
	.item {
		width: 100%;
		border-bottom: 1upx solid #eeeeee;
		padding: 26upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image {
			width: 144upx;
			height: 120upx;
			// background-color: #007AFF;
		}
		.rigth {
			width: 530upx;
			.top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				text {
					color: #343434;
					font-size: 30upx;
					display: block;
					width: 260upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:last-of-type {
						color: #ff0000;
						text-align: right;
					}
					// background-color: #007AFF;
				}
			}
		}
		.center {
			margin: 6upx 0;
			text {
				color: #565656;
				font-size: 24upx;
			}
			label {
				color: #565656;
				font-size: 24upx;
				margin: 0 10upx;
			}
		}
		.bottom {
			display: flex;
			text {
				display: block;
				background-color: #f6f6f6;
				padding: 2upx 16upx;
				color: #898989;
				font-size: 20upx;
				border-radius: 6upx;
				margin-right: 20upx;
			}
		}
	}
}
</style>
