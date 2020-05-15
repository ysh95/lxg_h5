<template>
	<view class="indexRecruit">
		<view class="searsh">
			<image src="../../static/img/img4.png" mode=""></image>
			<input type="text" value="" placeholder="请输入搜索内容"/>
		</view>
		<view class="tab">
			<text :class="0 == currentIndex ? 'title-sel' : ''" @tap="tab(0)">男</text>
			<text :class="1 == currentIndex ? 'title-sel' : ''"  @tap="tab(1)">女</text>
		</view>
		<view class="line"></view>
		<view class="content">
			<block v-for="(item,index) in list" :key='index'>
				<view class="item" @tap="go()">
					<image :src="item.img" mode=""></image>
					<view class="rigth">
						<view class="top">
							<text>{{item.title}}</text>
							<text>{{item.money}}</text>
						</view>
						<view class="center">
							<text>{{item.company}}</text>
						</view>
						<view class="bottom">
							<text>{{item.adder}}</text>
							<text>{{item.tip}}</text>
						</view>
					</view>
				</view>
			</block>
			
		</view>
		<view class="btn" @tap="post(0)">发布相亲/交友信息</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				list:[
					{img: '../../static/img/img3.png',title: '设计师',money: '20岁',adder: '西安-高新',tip: '男',company:'阿里巴巴'},
					{img: '../../static/img/img3.png',title: '设计师',money: '20岁',adder: '西安-高新',tip: '男',company:'阿里巴巴'}
				]
			}
		},
		methods: {
			tab(e){
				this.currentIndex = e
			},
			post(e){
				if(e== 0){
					uni.navigateTo({
						url:'../postMakeFri/postMakeFri'
					})
				}else{
					// uni.navigateTo({
					// 	url:'../postJob/postJob'
					// })
				}
			},
			go(e){
				uni.navigateTo({
					url:'../makeFriDetail/makeFriDetail'
				})
			}
			
		}
	}
</script>

<style lang="scss">
page{
	// background-color: #C0C0C0;
}
.searsh{
	width: 660upx;
	margin:0 26upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 6upx;
	height: 60upx;
	padding: 0 20upx;
	background-color: #F4F4F4;
	input{
		width: 600rpx;
	}
	image{
		width: 28upx;
		height: 28upx;
	}
}
.tab{
	width: 400upx;
	padding: 0 176upx;
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
.content{
	width: 700upx;
	padding: 26upx 26upx 90upx;
	.item{
		width: 100%;
		border-bottom: 1upx solid #EEEEEE;
		padding: 26upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image{
			width: 144upx;
			height: 120upx;
			// background-color: #007AFF;
		}
		.rigth{
			width: 530upx;
			.top{
				width: 100%;
				display: flex;
				justify-content: space-between;
				text{
					color: #343434;
					font-size: 30upx;
					display: block;
					width: 260upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:last-of-type{
						color: #FF0000;
						text-align: right;
					}
					// background-color: #007AFF;
				}
			}
		}
		.center{
			margin: 6upx 0;
			text{
				color: #565656;
				font-size: 24upx;
			}
			label{
				color: #565656;
				font-size: 24upx;
				margin: 0 10upx;
			}
		}
		.bottom{
			display: flex;
			text{
				display: block;
				background-color: #F6F6F6;
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
