<template>
	<view class="searchBox">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" @input="bindInput" @confirm="searchHanld()" placeholder="搜索" placeholder-class="searchTip" />
		</view>
		<mescroll-uni @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption" top="36upx" bottom='30upx'>
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
							<text>{{ item.amount_of_money }}</text>
							<text>{{ item.apply_num }}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import { ajax } from '@/static/js/base.js';
	import api from '@/static/js/api.js';
	export default {
		data() {
			return{
				upOption: {
					textNoMore: '木有更多了', // 没有更多数据的提示文本
					empty: {
						tip: '~ 暂无数据 ~', // 提示
					},
					auto: false,
				},
				downOption: {
					auto: false,
					use: false, 
				},
				list: [],
				title: '',
			}
		},
		methods: {
			bindInput(e) {
				console.log(e)
				this.inputValue = e.detail.value;
				// if (this.inputValue == '') {
				// 	this.mask = true;
				// }
			},
			upCallback(mescroll) {
				this.getList(mescroll, curPageData => {
					mescroll.endSuccess(curPageData.length, false);
					if (mescroll.num == 1) this.list = []; //如果是第一页需手动制空列表
					this.list = this.list.concat(curPageData);
				});
			},
			getList(mescroll, cb){
				ajax({
					url: api.projectSearch,
					type: 'POST',
					data: {
						page_size: 10,
						page: mescroll.num,
						post_name: this.inputValue
					}
				}).then(res => {
					var list = res.data.data || [];
					cb(list);
				});
			},
			searchHanld(e) {
				// if(this.title) {
					// this.fid = ''
					this.mescroll.resetUpScroll()
				// }
			}
		}
	}
</script>

<style lang="scss">
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
