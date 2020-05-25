<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" placeholder="请输入搜索内容" disabled="disabled" @tap="goSearch(1)"/>
		</view>
    <view class="notList" v-if="list.length == 0">
      {{upOption.empty.tip}}
    </view>
		<mescroll-uni v-if="list.length > 0" @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption" top="36upx" bottom='30upx'>
		<view class="content">
			<block v-for="(item, index) in list" :key="index">
				<view class="item" @tap="go(item.id)">
					<image :src="IMG_URL+item.image" mode=""></image>
					<view class="rigth">
						<view class="top">
							<text>{{ item.project_name }}</text>
						</view>
						<view class="center">{{item.summary}}</view>
						<view class="bottom">
							<text>{{ item.amount_of_money }}元</text>
							<text>{{ item.apply_num }}人申请</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		</mescroll-uni>
		<view class="btn" @tap="post()">发布项目</view>
		<!-- <view class="btn" v-else @tap="post(1)">发布求职信息</view> -->
	</view>
</template>

<script>
import { ajax } from '@/static/js/base.js';
import api from '@/static/js/api.js';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			upOption: {
				textNoMore: '木有更多了', // 没有更多数据的提示文本
				empty: {
					tip: '~ 暂无内容 ~'
				}
			},
			list: []
		};
	},
  onLoad() {
    ajax({
    	url: api.getProject,
    	type: 'GET',
    	data: {
    		page_size: 10,
    		page: 1
    	}
    }).then(res => {
      console.log(res)
      if (res.status_code == 'ok') {
        this.list = res.data.data || [];
        // cb(list);
      }
    });
  },
	onShow() {
		this.canReset && this.mescroll && this.mescroll.resetUpScroll();
		this.canReset = true; // 过滤第一次的onShow事件,避免初始化界面时重复触发upCallback
	},
	methods: {
		upCallback(mescroll) {
			this.getList(mescroll, curPageData => {
				mescroll.endSuccess(curPageData.length, false);
				if (mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
				this.list = this.list.concat(curPageData);
			});
		},
		// getList(mescroll, cb) {
		// 	ajax({
		// 		url: api.getProject,
		// 		type: 'GET',
		// 		data: {
		// 			page_size: 10,
		// 			page: mescroll.num
		// 		}
		// 	}).then(res => {
  //       if (res.status_code == 'ok') {
  //         var list = res.data.data || [];
  //         cb(list);
  //       }
		// 	});
		// },
    getList(mescroll, cb) {
    	ajax({
    		url: api.getProject,
    		type: 'GET',
    		data: {
    			page_size: 10,
    			page: mescroll.num
    		}
    	}).then(res => {
    		if(res.status_code == "ok"){
          let dataList = res.data.data || []
    			var list = dataList || [];
    			cb(list);
    		} else if(res.status_code == "error") {
          var list = [];
          cb(list);
    		  if(res.message == '暂无信息'){
    		  	this.mescroll.endByPage(0, 0);
    			}
    		}
    	});
    },
		post(e) {
			uni.navigateTo({
				url: '../postProject/postProject'
			});
		},
		go(e) {
			uni.navigateTo({
				url: `../goodProjectDetail/goodProjectDetail?id=${e}`
			});
		},
		goSearch(e){
			uni.navigateTo({
				url:'../goodProject/goodProjectSearch'
			})
		}
	}
};
</script>

<style lang="scss">
page {
	// background-color: #F6F6F6;
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
	width: 750upx;
	// padding: 0 126upx;
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
	padding: 26upx 26upx 0;
	// height: 89vh;
	.item {
		width: 100%;
		border-bottom: 1upx solid #eeeeee;
		padding: 26upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image {
			width: 220upx;
			height: 162upx;
		}
		.rigth {
			width: 450upx;
			.top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				text {
					color: #343434;
					font-size: 30upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					// background-color: #007AFF;
				}
			}
		}
		.center {
			margin: 8upx 0;
			color: #565656;
			font-size: 24upx;
			width: 450upx;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			text {
				display: block;
				color: #898989;
				font-size: 24upx;
				&:first-of-type {
					font-size: 30upx;
					color: #ff0000;
				}
			}
		}
	}
}
</style>
