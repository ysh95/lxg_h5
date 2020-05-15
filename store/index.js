import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
import { ajax } from '../static/js/base.js'
import api from '../static/js/api.js'

console.log('store', ajax)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
	state: {
		userInfo: '', // 用户默认授权信息
		// settlement: '', // 下单信息
		user: '', // 后端返回用户信息
		address: '', // 用户当前选择地址信息
		bank: '', // 用户当前银行卡信息
		balance: 0, // 用户余额
		rank: 0,  //会员等级
	},
	getters: {
		userInfo: state => state.userInfo,
		address: state => state.address,
		// settlement: state => state.settlement,
		user: state => state.user,
		bank: state => state.bank,
		balance: state => state.balance,
		rank: state => state.rank
	},
	mutations: {
		setUserInfo(state, data) {
			state.userInfo = data
			// var login = require('../static/js/base.js')
			// login()
		},
		setUser(state, data) {
			state.user = data
		},
		setAddress(state, data) {
			state.address = data
		},
		setBank(state, data) {
			state.bank = data
		},
		setBalance(state, data) {
			state.balance = data
		},
		setRank(state, data) {
			state.rank = data
		}
	},
	actions: {
		asyncQueryRank({state, commit}) {
			uni.request({
				url: api.msg_rank,
				method: "POST",
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				dataType: "json",
				responseType: "text",
				data: {
					msg_id: state.user.id
				}
			}).then(data => {
				var [err, res] = data
				commit('setRank', Number(res.data.rank_id))
			})
		}
	},
	plugins: debug ? [createLogger()] : []
})

export default store
