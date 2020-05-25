<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" placeholder="请输入搜索内容" @input="searchList"/>
		</view>
    <view class="notList" v-if="list.length == 0">
      {{upOption.empty.tip}}
    </view>
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
		<!-- <view class="btn" @tap="post()">发布项目</view> -->
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
  },
	onShow() {
    // this.list = []
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
    		url: `${api.URL}/api/projectSearch`,
    		type: 'POST',
    		data: {
          project_name: this.key,
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
			uni.navigateTo({
				url: '../postProject/postProject'
			});
		},
		go(e) {
			uni.navigateTo({
				url: `../goodProjectDetail/goodProjectDetail?id=${e}`
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
