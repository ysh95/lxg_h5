(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wantDetail-wantDetail"],{"0823":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("e03d"),s=a(i("2ed5")),o={data:function(){return{options:{id:""},URL:"",IMG_URL:"",purchaseInfo:{}}},onLoad:function(t){var e=this;e.options=t,e.URL=s.default.URL,e.IMG_URL=s.default.IMG_URL,(0,n.ajax)({url:s.default.home_news_xg,data:{id:e.options.id}}).then((function(t){if("ok"==t.status_code){for(var i=t.data,a=0;a<i.images.length;a++)i.images[a]="".concat(e.IMG_URL,"/").concat(i.images[a]);e.purchaseInfo=i}}))},methods:{open:function(){this.$refs.popup.open()},submit:function(){var t=this,e=this;(0,n.ajax)({url:s.default.home_get_contact,data:{id:e.options.id}}).then((function(i){if(console.log(i),"ok"==i.status_code){var a=i.data;e.purchaseInfo.name=a.name,e.purchaseInfo.mobile=a.mobile,e.purchaseInfo.company=a.company}else"user_error"==i.status_code||"error"==i.status_code&&t.$refs.popup.open()}))},close:function(){this.$refs.popup.close()}}};e.default=o},"6b0c":function(t,e,i){var a=i("dece");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("36af7790",a,!0,{sourceMap:!1,shadowMode:!1})},8066:function(t,e,i){"use strict";var a=i("6b0c"),n=i.n(a);n.a},c7a5:function(t,e,i){"use strict";i.r(e);var a=i("0823"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},dece:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-1082f4d6]{background-color:#f6f6f6}.want[data-v-1082f4d6]{width:%?750?%}.item[data-v-1082f4d6]{width:%?700?%;padding:%?26?%;background-color:#fff;margin-bottom:%?20?%}.item .title[data-v-1082f4d6]{position:relative;font-weight:700;color:#333;font-size:%?32?%;padding-left:%?28?%;margin-bottom:%?18?%}.item .title[data-v-1082f4d6]::after{content:"";position:absolute;width:%?10?%;height:%?36?%;background:#0076ff;border-radius:%?6?%;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.item .every[data-v-1082f4d6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?10?%}.item .every uni-label[data-v-1082f4d6]{font-size:%?28?%;color:#343434}.item .every > uni-text[data-v-1082f4d6]{color:#999;font-size:%?26?%;display:block;width:%?530?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item .four > uni-text[data-v-1082f4d6]{color:#999;font-size:%?26?%;display:block;width:%?555?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item .four .textLine[data-v-1082f4d6]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:pre-wrap}.item .four .img[data-v-1082f4d6]{width:%?555?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.item .four .img uni-image[data-v-1082f4d6]{width:%?176?%;height:%?128?%;margin:0 %?12?% %?12?% 0}.item .four .img uni-image[data-v-1082f4d6]:nth-of-type(3n){margin-right:0}body.?%PAGE?%[data-v-1082f4d6]{background-color:#f6f6f6}',""]),t.exports=e},f6fc:function(t,e,i){"use strict";i.r(e);var a=i("f7eb"),n=i("c7a5");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8066");var o,u=i("f0c5"),v=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"1082f4d6",null,!1,a["a"],o);e["default"]=v.exports},f7eb:function(t,e,i){"use strict";var a={"uni-popup":i("fcb0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"want"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[t._v("采购信息")]),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("采购产品：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.product))])],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("需求数量：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.product))])],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("产品规格：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.product_spec))])],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("项目名称：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.project))])],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("项目地址：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.address))])],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("预算资金：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.amount_of_money))])],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("结算方式：")]),1==t.purchaseInfo.method?i("v-uni-text",[t._v("现结")]):2==t.purchaseInfo.method?i("v-uni-text",[t._v("分期")]):t._e()],1),i("v-uni-view",{staticClass:"every four"},[i("v-uni-label",[t._v("采购期限：")]),1==t.purchaseInfo.purchase_period?i("v-uni-text",[t._v("单次采购")]):2==t.purchaseInfo.purchase_period?i("v-uni-text",[t._v("长期采购")]):t._e()],1),i("v-uni-view",{staticClass:"every four",staticStyle:{"align-items":"flex-start"}},[i("v-uni-label",[t._v("其他说明：")]),i("v-uni-text",{staticClass:"textLine"},[t._v(t._s(t.purchaseInfo.product_description))])],1),i("v-uni-view",{staticClass:"every four",staticStyle:{"align-items":"flex-start"}},[i("v-uni-label",[t._v("图      片：")]),i("v-uni-view",{staticClass:"img"},t._l(t.purchaseInfo.images,(function(t,e){return i("v-uni-image",{key:e,attrs:{src:t,mode:""}})})),1)],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title"},[t._v("供应商信息")]),i("v-uni-view",{staticClass:"every"},[i("v-uni-label",[t._v("供应商地区：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.area))])],1),i("v-uni-view",{staticClass:"every"},[i("v-uni-label",[t._v("品牌要求：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.area))])],1)],1),i("v-uni-view",{staticClass:"item",staticStyle:{"margin-bottom":"90upx"}},[i("v-uni-view",{staticClass:"title"},[t._v("联系方式")]),i("v-uni-view",{staticClass:"every"},[i("v-uni-label",[t._v("采购人姓名：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.name))])],1),i("v-uni-view",{staticClass:"every"},[i("v-uni-label",[t._v("采购人电话：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.mobile))])],1),i("v-uni-view",{staticClass:"every"},[i("v-uni-label",[t._v("采购人单位：")]),i("v-uni-text",[t._v(t._s(t.purchaseInfo.company))])],1)],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("获取联系方式")]),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"vip-box"},[i("v-uni-view",{staticClass:"close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("×")]),i("v-uni-view",{staticClass:"text"},[i("v-uni-text",[t._v("发布信息")]),i("v-uni-text",[t._v("请先发布一条供求信息，即可查看联 系方式")])],1),i("v-uni-view",{staticClass:"fot"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navMembership.apply(void 0,arguments)}}},[t._v("立即发布")]),i("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消发布")])],1)],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))}}]);