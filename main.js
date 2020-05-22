import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue({
	...App
})
app.$mount()

// mescroll插件公共初始化代码
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js"
Vue.mixin({
	...MescrollMixin,
	data(){
		return {
			IMG_URL: require('./static/js/api.js').IMG_URL
		}
	},
	// onShareAppMessage(t) {
	// 	console.log('分享, main.js  16')
	// }
})
