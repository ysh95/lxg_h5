import api from './api.js'
import store from '../../store/index'

class Base {
  constructor() {
    this.ajax = this.ajax.bind(this)
    this.login = this.login.bind(this)
  }
  async ajax(e) {
    var that = this
    // 默认超过800毫秒显示加载中；
    if (!e.hideLoading) {
      e.timer = setTimeout(() => {
        uni.showLoading({
          title: e.loadingText || '加载中'
        })
        clearTimeout(t.timer)
      }, 800)
    }
    let token = ''
    uni.getStorage({
      key: 'token',
      success: (res1) => {},
      complete: (res1) => {
        token = res1.data
      }
    });
    return uni.request({
      url: e.url,
      data: Object.assign({
        // msg_id: store.state.user.id
      }, e.data),
      header: e.header || {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: token || ''
        // Authorization: "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC94dG4uYmVhY29ud2F5LmNuXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTkwMzkyOTgwLCJleHAiOjE1OTA5OTc3ODAsIm5iZiI6MTU5MDM5Mjk4MCwianRpIjoiSWZYY1VWRXJzb1VINnVKUCIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.nefGS5N3IlR3nogBN9e0wKGQZ85XZOBj3Tp3VbRlz74"
      },
      method: e.type || "POST",
      dataType: e.dataType || "json",
      responseType: e.responseType || "text"
    }).then(data => {
      uni.hideLoading()
      if (data.status_code == 'user_error') {
        uni.showLoading({
          title: '用户登录过期,请进行重新登录操作'
        })
        this.goWXLogin()
        return 
      }
      clearTimeout(e.timer)
      var [err, res] = data
      // 500 登录过期自动调用login传入上次请求参数重新登录
      return res.data.status_code == 500 ? this.login(e) : res.data
    })


  }
  goWXLogin() {
    ajax({
    	url: `${api.URL}/api/auth/getParam`,
    	type: "GET"
    }).then(res => {
      window.location.href = decodeURIComponent(res)
    })
  }
  async login(e, p_id) {
    // console.log(p_id, '分销推广人id')
    var [err, res] = await uni.login()
    var userInfo = store.state.userInfo
    var loginData = {
      code: res.code,
      name: userInfo.nickName,
      pic: userInfo.avatarUrl,
    }
    var data = await this.ajax({
      url: api.login,
      data: loginData
    })
    if (data.error_code == 4000) {
      store.commit('setUser', data.data)
      // 判断是否属于登录过期重新登录，e存在则重新上次请求
      if (e) {
        return await this.ajax(e)
      }
    }
  }
  queryBalance = () => {
    return this.ajax({
      url: api.msg_price
    }).then(res => {
      if (res.error_code == 4000) {
        store.commit('setBalance', res.price)
      }
    })
  }
  format = (type, data) => {
    if (type == 'phone') {
      return /^1[3456789]\d{9}$/.test(data)
    } else if (type == 'password') {
      // 6~20位字母数字组合
      return /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/.test(data)
    } else if (type == 'email') {
      return /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(data)
    } else if (type == 'card') {
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data)
    }
  }
  formatDate = (secs) => {
    if (!secs) return ''
    var length = secs.toString().length
    secs = length == 10 ? Number(secs + '000') : Number(secs)
    var t = new Date(secs)
    var year = t.getFullYear()
    var month = padZero(t.getMonth() + 1)
    var date = padZero(t.getDate())
    var hour = padZero(t.getHours())
    var minute = padZero(t.getMinutes())
    var second = padZero(t.getSeconds())
    return year + '-' + month + '-' + date
    // + ' ' + hour + ':' + minute + ':' + second
  }
  getQueryString = (url, name) => {
    var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
    var r = url.substr(1).match(reg)
    if (r != null) {
      return r[2]
    }
    return null;
  }
}

// 补位0
function padZero(num, targetLength) {
  return num.toString().length == 1 ? '0' + num : num
}

module.exports = new Base()
