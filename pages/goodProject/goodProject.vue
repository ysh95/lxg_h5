<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" placeholder="请输入搜索内容" />
		</view>
		<view class="tab">
			<text :class="0 == currentIndex ? 'title-sel' : ''" @tap="tab(0)">机器人教育</text>
			<text :class="1 == currentIndex ? 'title-sel' : ''"  @tap="tab(1)">投资金额</text>
		</view>
		<view class="line"></view>
		<view class="content">
			<block v-for="(item, index) in list" :key="index">
				<view class="item" @tap="go()">
					<image :src="item.img" mode=""></image>
					<view class="rigth">
						<view class="top">
							<text>{{ item.title }}</text>
						</view>
						<view class="center">嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻谢谢</view>
						<view class="bottom">
							<text>{{ item.adder }}</text>
							<text>{{ item.tip }}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="btn" @tap="post()">发布项目</view>
		<!-- <view class="btn" v-else @tap="post(1)">发布求职信息</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			list: [
				{ img: '', title: '设计师', money: '15K-20K', adder: '西安-高新', tip: '招聘岗位', company: '阿里巴巴', time: '1-3年工作经验' },
				{ img: '../../static/img/img3.png', title: '设计师', money: '15K-20K', adder: '西安-高新', tip: '招聘岗位', company: '阿里巴巴', time: '1-3年工作经验' }
			]
		};
	},
	methods: {
		tab(e) {
			this.currentIndex = e;
		},
		post(e) {
			uni.navigateTo({
				url: '../postProject/postProject'
			});
		},
		go(e) {
			uni.navigateTo({
				url: '../goodProjectDetail/goodProjectDetail'
			});
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
.tab{
	width: 750upx;
	// padding: 0 126upx;
	display: flex;
	justify-content: space-around;
	height: 80upx;
	line-height: 80upx;
	text{
		font-size: 30upx;
		color: #343434;
	}
	.title-sel{
		color: #0076FF;
		border-bottom: 4upx solid #007AFF;
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
			width: 220upx;
			height: 162upx;
			// background-color: #007AFF;
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
			width:450upx;
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
