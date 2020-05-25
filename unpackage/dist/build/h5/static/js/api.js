// var  URL = "http://www.lxg.com"
var URL = "http://xtn.beaconway.cn"
var IMG_URL = "http://xtn.beaconway.cn/uploads/"
//B    MXXIII
module.exports = {
	URL: URL,
	IMG_URL: IMG_URL,
	// 登录接口
	login: URL + '/login/login',
	// 首页anner请求
	index_banner: URL + '/api/getBanners',
	// 招聘列表
	recruit_List:  URL + '/api/getRecruit',
	// 招聘详情
	getRecruitInfo: URL + '/api/getRecruitInfo',
	// 获取联系方式
	getRecruitDetails: URL + '/api/getRecruitDetails',
	// 发布招聘
	addRecruit: URL + '/api/addRecruit',
	// 求职列表
	getJobWanted: URL + '/api/getJobWanted',
	// 求职详情
	getJobWantedInfo: URL + '/api/getJobWantedInfo',
	// 获取联系方式
	getJobWantedDetails: URL + '/api/getJobWantedDetails',
	// 发布求职
	addJobWanted: URL + '/api/addJobWanted',
	// 相亲列表
	getBlindDate: URL + '/api/getBlindDate',
	// 相亲详情
	getBlindDateInfo: URL + '/api/getBlindDateInfo',
	// 相亲获取联系方式
	getBlindDateDetails: URL + '/api/getBlindDateDetails',
	// 发布
	addBlindDateInfo: URL + '/api/addBlindDateInfo',
	// 借款人详情
	getLoan: URL + '/api/getLoan',
	//  发布
	addLoan: URL + '/api/addLoan',
	// xiangqing
	getLoanInfo: URL + '/api/getLoanInfo',
	// 获取联系方式
	getLoanDetails: URL + '/api/getLoanDetails',
	// 留言
	addMessage: URL + '/api/addMessage',
	// 招商加盟列表
	getProject: URL + '/api/getProject',
	// 招商加盟详情
	getProjectInfo: URL + '/api/getProjectInfo',
	// 获取联系方式
	getProjectDetails: URL + '/api/getProjectDetails',
	// 我有技能（公司）
	getNeedSkill: URL + '/api/getNeedSkill',
	// 获取详情
	getNeedSkillInfo: URL + '/api/getNeedSkillInfo',
	// 获取联系方式
	getNeedSkillDetails: URL + '/api/getNeedSkillDetails',
	// 我有技能（个人）
	getMySkill: URL + '/api/getMySkill',
	// 详情
	getMySkillInfo: URL + '/api/getMySkillInfo',
	// 联系方式
	getMySkillDetails: URL + '/api/getMySkillDetails',
	// 融资列表
	getFinancing: URL + '/api/getFinancing',
	// 详情
	getFinancingInfo: URL + '/api/getFinancingInfo',
	// 获取联系方式
	getFinancingDetails: URL + '/api/getFinancingDetails',
	// 投资列表
	getInvestment: URL + '/api/getInvestment',
	// 详情
	getInvestmentInfo: URL + '/api/getInvestmentInfo',
	// 获取联系方式
	getInvestmentDetails: URL + '/api/getInvestmentDetails',
	// 供货商列表
	getSupplier: URL + '/api/getSupplier',
	// 详情
	getSupplierInfo: URL + '/api/getSupplierInfo',
	// 获取联系方式
	getSupplierDetails: URL + '/api/getSupplierDetails',
	// 招商搜索
	projectSearch: URL + '/api/projectSearch',
	
	// 求购分类推荐入口
	home_push: URL + '/api/getTopNavigationBars',
	// 求购分类默认入口
	home_plain: URL + '/api/getMiddleNavigationBars',
	// 求购信息列表
	home_news: URL + '/api/getPurchases',
	// 求购信息内容
	home_news_xg: URL + '/api/purchaseInfo',
	// 获取联系方式
	home_get_contact: URL + '/api/getDetails',
	// 上传图片
	home_upload_img: URL + '/api/upload',
	// 求购信息提交
	home_news_do: URL + "/index/home_news_do",
	// 求购发布类型
	home_type: URL + "/index/home_type",
	// 竞标信息提交
	home_bidding: URL + "/index/home_bidding",
	// 商城banner请求
	mall_banner: URL + '/mall/banner',
	// 商品列表
	mall_list: URL + '/mall/mall_list',
	// 商城分类列表
	mall_type: URL + '/mall/mall_type',
	// 订单提交
	mall_order: URL + '/mall/mall_order',
	// 抢购信息
	mall_snap: URL + '/mall/mall_snap',
	// 商品详情
	mall_xg: URL + '/mall/mall_xg',
	// 默认收货地址请求
	default_add: URL + '/mall/add',
	// 我的收货地址
	msg_add: URL + '/msg/msg_add',
	// 收货地址添加编辑
	msg_add_xg: URL + '/msg/msg_add_xg',
	// 收货地址删除
	msg_add_del: URL + '/msg/msg_add_del',
	// 企业圈列表
	news_list: URL + '/news/news_list',
	// 企业圈内容
	news_xg: URL + '/news/news_xg',
	// 留言信息提交
	news_member_do: URL + '/news/news_member_do',
	// 我的银行卡
	msg_card: URL + '/msg/msg_card',
	// 开户行信息
	bank: URL + '/index/bank',
	// 银行卡添加编辑
	msg_card_xg: URL + '/msg/msg_card_xg',
	// 银行卡删除
	msg_card_del: URL + '/msg/msg_card_del',
	// 我的发布
	msg_home: URL + '/msg/msg_home',
	// 我的发布--删除
	msg_home_del: URL + '/msg/msg_home_del',
	// 关于我们
	about: URL + '/index/about',
	// 意见反馈
	msg_member: URL + '/msg/msg_member',
	// 订单信息列表
	msg_order: URL + '/msg/msg_order',
	// 订单状态修改
	msg_order_xg: URL + '/msg/msg_order_xg',
	// 订单评论提交
	msg_order_pl: URL + '/msg/msg_order_pl',
	// 手机+邀请码填写
	msg_code: URL + '/msg/msg_code',
	// 会员等级
	rank: URL + '/msg/rank',
	// 开通会员--余额开通
	msg_open_down: URL + '/pay/msg_open_down',
	// 余额查询
	msg_price: URL + '/msg/msg_price',
	// 会员分销信息
	msg_xg: URL + '/msg/msg_xg',
	// 会员分配账号
	msg_parcel: URL + '/msg/msg_parcel',
	// 账号明细
	msg_balance: URL + '/msg/msg_balance',
	// 余额提现
	msg_cash: URL + '/msg/msg_cash',
	// 默认银行卡查询
	msg_bank: URL + '/msg/msg_bank',
	// 会员等级查询
	msg_rank: URL + '/msg/msg_rank',
	// 短信验证
	SmsDemo: URL + '/dysms_php/api_demo/SmsDemo.php',
	// 支付接口
	pay: URL + '/wechatpay/pay',
}
