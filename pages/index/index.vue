
<template>
	<view class="content">
    
		<mescroll-uni @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption">
			<!-- <navigator class="search-wrap" hover-class="none" url="/pages/search/search">
				<text>心疼你给你客户</text>
				<view class="search-box">
					<image src="/static/img/img4.png"></image>
					<input type="text" placeholder="请输入搜索内容" disabled placeholder-class="search-placeholder">
				</view>
			</navigator> -->
			<!-- banner轮播 -->
			<swiper class="swiper-one" indicator-dots autoplay interval="3000" circular duration="1000" indicator-active-color="#F7F7F7">
				<swiper-item v-for="(item, index) in bannerArr" :key="index">
					<navigator class="nav-tap">
						<image :src="item.banner" class="slide-image"></image>
					</navigator>
				</swiper-item>
			</swiper>
			<!-- 顶部导航 -->
			<view class="classify">
				<block v-for="(item, index) in classifyArr" :key="index">
					<navigator class="classify-item" hover-class="none" :url="'/' + item.url + '?id=' + item.id">
						<image :src="item.icon"></image>
						<text>{{item.title}}</text>
					</navigator>
				</block>
			</view>
			<!-- 中部导航 -->
			<view class="demand">
				<block v-for="(item, index) in demandArr" :key="index">
					<!-- <navigator class="demand-item" :url="'/pages/release/release?fid='+ item.id"> -->
					<navigator class="demand-item" :url="'/'+item.url + '?id=' + item.id">
						<view class="words">
							<view>我要{{item.title}}</view>
							<text>{{item.subtitle}}</text>
						</view>
						<image :src="item.icon"></image>
					</navigator>
				</block>
			</view>

			<view class="demand-title">
				<image src="/static/img/img15.png"></image>
			</view>
			<view class="info">
				<!-- api/getPurchases -->
				<!-- 求购列表 -->
				<block v-for="(item, index) in purchasesList" :key="index">
					<navigator class="info-item" hover-class="none" :url="'/pages/wantDetail/wantDetail?id=' + item.id">
					<!-- <navigator class="info-item" hover-class="none" :url="'/pages/info-details/info-details?id=' + item.id "> -->
						<view class="title overflow-one">{{item.product}}</view>
						<view class="text overflow-two">{{item.product_description}}</view>
						<view class="fot">
							<view class="city">
								<image src="/static/img/img16.png"></image>
								<text>{{item.address}}</text>
							</view>
							<view class="time">
								<image src="/static/img/img17.png"></image>
								<text>{{item.updated_at}}</text>
							</view>
						</view>
					</navigator>
				</block>
			</view>

		</mescroll-uni>
		<!-- #ifdef MP-WEIXIN -->
		<!-- <button class="getuserinfo" open-type="getUserInfo" v-if="!userInfo" @getuserinfo="getUserInfo"></button> -->
		<!-- #endif -->
		<button type="" class="post" @tap="postWant">发布</button>
	</view>
</template>

<script>
	import {
		login,
		ajax,
		formatDate
	} from '@/static/js/base.js'
	import api from '@/static/js/api.js'
	import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue'
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			MescrollEmpty
		},
		data() {
			return {
				URL: '',
				IMG_URL: '',
				options: null,
				bannerArr: [],
				classifyArr: [],
				demandArr: [],
				upOption: {
					textNoMore: '木有更多了', // 没有更多数据的提示文本
					empty: {
						tip: '~ 暂无数据 ~', // 提示
					}
				},
				purchasesList: []
			}
		},
		onLoad(options) {
			var that = this
      that.options = options
			that.URL = api.URL
			that.IMG_URL = api.IMG_URL
      uni.getStorage({
        key: 'token',
        success: (res1) => {},
        complete: (res1) => {
          if(res1.data == '') {
            // that.login()
          }
        }
      });
			// 首页banner请求
			ajax({
				url: api.index_banner,
				type: "GET"
			}).then(res => {
				if (res.status_code == "ok") {
					let bannerArr = res.data
					for (let i = 0; i < bannerArr.length; i++) {
						bannerArr[i].banner = `${that.IMG_URL}/${bannerArr[i].banner}`
					}
					this.bannerArr = bannerArr
				}
			})
			// 求购分类推荐入口
			ajax({
				url: api.home_push,
				type: "GET"
			}).then(res => {
				if (res.error_code == 4000) {
					this.classifyArr = res.data
				}
				if (res.status_code == "ok") {
					let classifyArr = res.data
					for (let i = 0; i < classifyArr.length; i++) {
						classifyArr[i].icon = `${that.IMG_URL}/${classifyArr[i].icon}`
					}
					this.classifyArr = classifyArr
				}
			})
			// 求购分类默认入口
			ajax({
				url: api.home_plain,
				type: "GET"
			}).then(res => {
				console.log(res)
				if (res.status_code == "ok") {
					let demandArr = res.data
					for (let i = 0; i < demandArr.length; i++) {
						demandArr[i].icon = `${that.IMG_URL}/${demandArr[i].icon}`
					}
					console.log(demandArr)
					this.demandArr = demandArr
				}
			})
		},
		computed: {
			...mapGetters(['userInfo']),
		},
		methods: {
			getphonenumber(e) {
				console.log(e)
			},
      login() {
        const that = this
        // console.log('=========================')
        // console.log(that.options.hasOwnProperty('code'))
        // return false
        if (that.options.hasOwnProperty('code')) {
          let code = that.options.code
          ajax({
          	url: `${that.URL}/api/auth/login`,
          	type: "POST",
            data: {
              code: code
            },
          }).then(res => {
            // console.log(res)
            if (res.status_code == 'ok') {
              let token = res.token_type + res.access_token
              uni.setStorage({
                key: 'token',
                data: token
              });
            } else {
              that.goWXLogin()
            }
          })
        } else {
          that.goWXLogin()
        }
        
      },
      goWXLogin() {
        ajax({
        	url: `${this.URL}/api/auth/getParam`,
        	type: "GET"
        }).then(res => {
          // console.clear()
          // console.log(decodeURIComponent(res))
          window.location.href = decodeURIComponent(res)
        })
      },
			...mapMutations(['setUserInfo']),
			getUserInfo(e) {
				if (e.detail.errMsg == 'getUserInfo:ok') {
					this.setUserInfo(e.detail.userInfo)
					login()
				}
			},
			upCallback(mescroll) {
				this.getPurchases(mescroll, curPageData => {
					if (mescroll.num == 1) this.list = curPageData; //如果是第一页需手动制空列表
					this.purchasesList = this.purchasesList.concat(curPageData)
					this.$nextTick(() => {
						mescroll.endSuccess(curPageData.length);
					})
				})
			},
			// 获取求购列表
			getPurchases(mescroll, cb) {
				ajax({
					url: api.home_news,
					type: "GET",
					data: {
						page_size: 10,
						page: mescroll.num,
					}
				}).then(res => {
     //      console.clear()
					// console.log(res)
          if (res.status_code == 'ok') {
            // var purchasesList = res.data
            var purchasesList = res.data.data || []
            // purchasesList.forEach(item => {
            // 	item.time = formatDate(item.ctime)
            // })
            cb(purchasesList)
          }
          
				})
			},
			postWant(){
				uni.navigateTo({
					url:'../postWant/postWant'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F6F5F8;
	}

	.search-wrap {
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 54upx;
		padding: 10upx 20upx;

		text {
			color: #0076FF;
			font-size: 30upx;
			font-weight: bold;
			line-height: 54upx;
			
		}

		.search-box {
			flex: 1;
			position: relative;
			background: #F4F4F4;
			border-radius: 6upx;
			margin-left: 26upx;

			image {
				&:nth-of-type(1) {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 24upx;
					width: 27upx;
					height: 27upx;
				}
			}

			input {
				font-size: 24upx;
				margin-left: 68upx;
				height: 54upx;
			}
		}
	}

	.swiper-one {
		width: 100%;
		height: 300upx;

		.nav-tap,
		image {
			width: 100%;
			height: 100%;
		}
	}

	.classify {
		display: flex;
		background: #FFFFFF;

		.classify-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 120upx;

			image {
				width: 36upx;
				height: 41upx;
			}

			text {
				font-size: 24upx;
				color: #343434;
				font-weight: bold;
				margin-top: 12upx;
			}

		}
	}

	.demand {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 24upx;

		.demand-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 124upx;
			width: 340upx;
			box-sizing: border-box;
			padding: 0 24upx 0 20upx;
			background: #FFFFFF;
			border-radius: 8upx;
			margin-top: 26upx;

			.words {
				line-height: 1.5;

				view {
					color: #333333;
					font-weight: bold;
				}

				text {
					font-size: 24upx;
					color: #999999;
				}
			}

			image {
				width: 54upx;
				height: 52upx;
			}
		}
	}

	.demand-title {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90upx;

		image {
			width: 277upx;
			height: 30upx;
		}
	}

	.info {
		padding: 0 24upx;

		.info-item {
			display: flex;
			flex-direction: column;
			border-bottom: 1upx solid #DDDDDD;
			height: 186upx;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 14upx 0 0 0;

			.title {
				color: #333333;
				font-weight: bold;
				line-height: 1.5;
			}

			.text {
				color: #666666;
				font-size: 24upx;
				line-height: 1.5;
			}

			.fot {
				padding: 16upx 0;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				color: #999999;
				font-size: 22upx;

				.city {
					display: flex;
					align-items: center;

					image {
						margin-right: 6upx;
						width: 18upx;
						height: 22upx;
					}
				}

				.time {
					margin-left: 44upx;
					display: flex;
					align-items: center;

					image {
						margin-right: 6upx;
						width: 24upx;
						height: 16upx;
					}
				}
			}
		}
	}

	.getuserinfo {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 999;
		background: transparent;
	}
	.content{
		// height: 100%;
	}
	.post{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		background-color: #007AFF;
		position: fixed;
		z-index: 9;
		right: 0;
		bottom: 300upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
</style>
