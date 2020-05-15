<template>
	<view class="post">
		<view class="form">
			<view class="item">
				<label>采购产品</label>
				<input type="text" value="" placeholder="请填写采购产品名称" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购数量</label>
				<input type="text" value="" placeholder="请填写采购数量" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>产品规格</label>
				<input type="text" value="" placeholder="请填写产品规格" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>项目名称*</label>
				<input type="text" value="" placeholder="请填写项目名称*" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>项目地址</label>
				<input type="text" value="" placeholder="请填写项目地址" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>预算金额</label>
				<input type="number" value="" placeholder="请填写预算金额" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>结款方式</label>
				<view class="radioGroup"> 
					<block v-for="(item,index) in selList" :key='index'>
						<view class="" @tap="pay(index)">
							<image :src="isCheckState==index?iconsel: iconNosel" class="section" :class="isCheckState==index?iconsel: iconNosel" ></image>
							<text>{{item.name}}</text>
						</view>
					</block>
				 </view>
			</view>
			<view class="item">
				<label>采购期限</label>
				<view class="radioGroup"> 
					<block v-for="(item,index) in selList" :key='index'>
						<view class="" @tap="buyType(index)">
							<image :src="isbuyType==index?iconsel: iconNosel" class="section" :class="isbuyType==index?iconsel: iconNosel" ></image>
							<text>{{item.name}}</text>
						</view>
					</block>
				 </view>
			</view>
			<view class="item" style="align-items: flex-start;">
				<label>产品描述</label>
				<textarea class="textarea" value="" placeholder="请填写采购产品描述信息" placeholder-class="placeholderSty"/>
			</view>
			<view class="item">
				<label>上传图片</label>
				<view class="imgList">
					<image src="../../static/img/img3.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="form five">
			<view class="item">
				<label>供货商地区</label>
				<input type="text" value="" placeholder="请填写供货商地区" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>供货商品牌</label>
				<input type="text" value="" placeholder="请填写供货商品牌" placeholder-class="placeholderSty" />
			</view>
		</view>
		<view class="form five" style="margin-bottom: 90upx;">
			<view class="item">
				<label>采购人单位</label>
				<input type="text" value="" placeholder="请填写采购人单位" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购人姓名</label>
				<input type="text" value="" placeholder="请填写采购人姓名" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>采购人电话</label>
				<input type="number" value="" placeholder="请填写采购人电话" placeholder-class="placeholderSty" />
			</view>
			<view class="item">
				<label>是否紧急</label>
				<view class="radioGroup"> 
					<block v-for="(item,index) in urgentList" :key='index'>
						<view class="" @tap="urgentType(index)">
							<image :src="isUrgent==index?iconsel: iconNosel" class="section" :class="isUrgent==index?iconsel: iconNosel" ></image>
							<text>{{item.name}}</text>
						</view>
					</block>
				 </view>
			</view>
		</view>
		<view class="btn" @tap="submit">发布</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isCheckState: 0,
			isbuyType: 0,
			isUrgent: 0,
			selList:[
				{name: '现金'},
				{name: '分期'},
			],
			buyList:[
				{name: '单次采购'},
				{name: '长期采购'},
			],
			urgentList:[
				{name: '紧急'},
				{name: '非紧急'},
			],
			iconsel: "../../static/img/img1.png",
			iconNosel: "../../static/img/img2.png",
		};
	},
	methods: {
		pay(e){
			this.isCheckState = e
		},
		buyType(e){
			this.isbuyType = e
		},
		urgentType(e){
			this.isUrgent = e
		}
	}
};
</script>

<style lang="scss">
page {
	background: #f6f6f6;
}
.post {
	width: 750upx;
}
.form {
	width: 700upx;
	padding: 26upx;
	margin-top: 20upx;
	background-color: #ffffff;
	.item {
		margin-bottom: 36upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:last-of-type {
			margin-bottom: 0;
		}
		label {
			color: #343434;
			font-size: 28upx;
			&:after {
				content: '*';
				color: #ff0000;
				font-size: 28upx;
			}
		}
		input {
			width: 520upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 10upx;
			color: #898989;
			font-size: 24upx;
			// height: 64upx;
		}
		.placeholderSty {
			color: #898989;
			font-size: 24upx;
		}
		.radioGroup{
			width: 540upx;
			display: flex;
			justify-content: flex-start;
			view{
				display: flex;
				align-items: center;
				margin-right: 50upx;
				image{
					width: 36upx;
					height: 36upx;
					border-radius: 50%;
					margin-right: 10upx;
					
				}
			}
			// background-color: #007AFF;
		}
		.textarea{
			width: 520upx;
			border: 1upx solid #dddddd;
			border-radius: 6upx;
			padding: 16upx 10upx;
			color: #898989;
			font-size: 24upx;
			height: 200upx;
		}
		.imgList{
			width: 540upx;
			display: flex;
			image{
				width: 134upx;
				height: 134upx;
				// background-color: #007AFF;
				margin-right: 10upx;
				
			}
		}
	}
}
.five {
	.item {
		input {
			width: 500upx;
		}
	}
}
</style>
