<template>
	<view class="investor">
		<view class="content">
			<block v-for="(item,index) in list" :key='index'>
				<view class="item" @tap="go()">
					<view class="top">
						<text>{{item.name}}</text>
						<text>投资金额：{{item.money}}</text>
					</view>
					<view class="itemContent">
						<label style="letter-spacing: 2upx;" >联 系 人:</label>
						<text>{{item.trade}}</text>
					</view>
					<view class="itemContent">
						<label for="">投资行业:</label>
						<text>{{item.type}}</text>
					</view>
					<view class="itemContent">
						<label for="">投资方式:</label>
						<text>{{item.adder}}</text>
					</view>
					<view class="itemContent">
						<label for="">投资地区:</label>
						<text>{{item.adder}}</text>
					</view>
				</view>
			</block>
		</view>
		<navigator url="../postStock/postStock" class="btn">发布股权/投资</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name: '后裔',money: '200万元',type: '债券投资',trade: '房地产',adder: '陕西省-高新区'},
					{name: '后裔',money: '200万元',type: '债券投资',trade: '房地产',adder: '陕西省-高新区'}
				]
			}
		},
		methods: {
			go(){
				uni.navigateTo({
					url:'../stockDetail/stockDetail'
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
				width: 220upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				&:last-of-type{
						width: 300upx;
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
