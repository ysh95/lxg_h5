<template>
	<view class="investor">
		<mescroll-uni @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption" top="0upx">
		<view class="content">
			<block v-for="(item,index) in list" :key='index'>
				<view class="item" @tap="go(item.id)">
					<view class="top">
						<text>{{item.loan_name}}</text>
						<text>投资金额：{{item.amount_of_money}}</text>
					</view>
					<view class="itemContent">
						<label style="letter-spacing: 2upx;" >联 系 人:</label>
						<text>{{item.contacts}}</text>
					</view>
					<view class="itemContent">
						<label for="">借款行业:</label>
						<text>{{item.type}}</text>
					</view>
					<view class="itemContent">
						<label for="">还款方式:</label>
						<text>{{item.repayment}}</text>
					</view>
					<view class="itemContent">
						<label for="">借款利率:</label>
						<text>{{item.interest_rate}}</text>
					</view>
				</view>
			</block>
		</view>
		</mescroll-uni>
		<navigator url="../postLoan/postLoan" class="btn">发布借款人</navigator>
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
						tip: '~ 暂无订单内容 ~'
					}
				},
				list: []
			}
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
			getList(mescroll, cb) {
				ajax({
					url: api.getLoan,
					type: 'GET',
					data: {
						page_size: 10,
						page: mescroll.num
					}
				}).then(res => {
					if(res.status_code == "ok"){
						var list = res.data.data || [];
						cb(list);
					} else {
            var list = [];
            cb(list);
          }
				});
			},
			go(e){
				uni.navigateTo({
					url:`../borrowerDetail/borrowerDetail?id=${e}`
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F6F6F6;
}
.investor{
	width: 750upx;
}
.content{
	margin-top: 20upx;
	padding-bottom: 90upx;
	.item{
		width: 700upx;
		padding: 26upx;
		background-color: #FFFFFF;
		margin-bottom: 10upx;
		.top{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text{
				color: #333333;
				font-size: 32upx;
				display: block;
				width: 120upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				&:last-of-type{
						width: 400upx;
						text-align: right;
						font-size: 30upx;
						color: #FF0000;
				}
			}
		}
		.itemContent{
			width: 100%;
			display: flex;
			margin-top: 16upx;
			label{
				color: #565656;
				font-size: 28upx;
			}
			text{
				display: block;
				width: 560upx;
				margin-left: 20upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #565656;
				font-size: 28upx;
			}
		}
	}
}
</style>
