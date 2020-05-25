<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" placeholder="请输入搜索内容" @input="searchList" />
		</view>
		<view class="line"></view>
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
		<!-- <view class="btn" @tap="post(0)">发布相亲/交友信息</view> -->
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
	},
	methods: {
		searchList(e) {
		  this.list = []
		  this.pageNnm = 1
		  this.key = e.detail.value
		  this.getList()
		},
		getList() {
		  if (this.key == '') {
		    return false
		  }
			ajax({
				url: `${api.URL}/api/blindDateSearch`,
				type: 'POST',
				data: {
		      name: this.key,
					page_size: 10,
					page: this.pageNnm
				}
			}).then(res => {
				if(res.status_code == "ok"){
		      let dataList = res.data.data
		      if (dataList.length > 0) {
		        this.pageNnm += 1
		        this.list = this.list.concat(dataList)
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
				url: `../makeFriDetail/makeFriendsSearch`
			});
		}
	},
  onReachBottom(){
    this.getList()
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
