(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{198:function(t,a,s){"use strict";s.r(a);var e=s(7),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"支付功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支付功能"}},[t._v("#")]),t._v(" 支付功能")]),t._v(" "),s("h2",{attrs:{id:"前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),s("p",[t._v("appid：微信小程序-账号-开发-开发设置")]),t._v(" "),s("p",[t._v("小程序密钥（生成/重置）：微信小程序-账号-开发-开发设置")]),t._v(" "),s("h3",{attrs:{id:"开通支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开通支付"}},[t._v("#")]),t._v(" 开通支付")]),t._v(" "),s("p",[t._v("微信小程序-功能-微信支付-接入微信支付")]),t._v(" "),s("p",[t._v("企业材料提交-审核")]),t._v(" "),s("h3",{attrs:{id:"关联商户号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联商户号"}},[t._v("#")]),t._v(" 关联商户号")]),t._v(" "),s("p",[t._v("商户号（mch_id）：微信支付-帐户中心-个人信息-登录账号（）")]),t._v(" "),s("p",[t._v("安装证书：微信支付-帐户中心-api安全-电脑上安装证书，识别不了就重装或者或浏览器")]),t._v(" "),s("p",[t._v("商户号密钥：微信支付-帐户中心-api安全-设置密钥")]),t._v(" "),s("h3",{attrs:{id:"微信商户平台账号-appid授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信商户平台账号-appid授权"}},[t._v("#")]),t._v(" 微信商户平台账号（appid授权）")]),t._v(" "),s("p",[t._v("产品中心-appid授权管理")]),t._v(" "),s("h3",{attrs:{id:"微信商户平台账号-配置支付接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信商户平台账号-配置支付接口"}},[t._v("#")]),t._v(" 微信商户平台账号（配置支付接口）")]),t._v(" "),s("p",[t._v("产品中心-开发配置-支付配置：")]),t._v(" "),s("p",[t._v("JSAPI（公众号支付配置）")]),t._v(" "),s("p",[t._v("native（app支付配置）")]),t._v(" "),s("p",[t._v("h5支付（h5支付配置）")]),t._v(" "),s("h2",{attrs:{id:"小程序支付流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序支付流程"}},[t._v("#")]),t._v(" 小程序支付流程")]),t._v(" "),s("p",[t._v("下单，请求下单支付，传到后端，后端调用登录api登录微信后台，微信后台返回openid")]),t._v(" "),s("p",[t._v("后端生成商户订单，调用支付统一下单，微信后台返回预支付信息（prepay_id）")]),t._v(" "),s("p",[t._v("后台对预支付信息进行再次签名，返回（5个参数和sign）到前端")]),t._v(" "),s("p",[t._v("前端接收参数，调用wx.pay，跳出支付页面")]),t._v(" "),s("p",[t._v("用户确认支付，微信后台自己会处理支付信息，修改订单支付的状态")]),t._v(" "),s("p",[t._v("后台只需等待微信后台支付结果的信息，更新订单状态")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=11_1#",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信支付SDK下载"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("login:function(){\n\twx.login({\n\t\tsuccess:function(info){\n\t\t\twx.request({\n\t\t\t\tmethod:'post',\n\t\t\t\turl:'后端请求地址/logon'+info.code,\n\t\t\t\t//后端把code拼接到请求微信后台的链接进行登录，然后获取微信后台返回的openid\n\t\t\t\tsuccess:function(res){\n\t\t\t\t\tconsole.log(res)\n\t\t\t\t\t// 保存微信后台返回的openid\n\t\t\t\t\tapp.globalData.userInfo.openId = res.data.openid\n\t\t\t\t}\n\t\t\t})\n\t\t}\n\t})\n}\n")])])]),s("h2",{attrs:{id:"h5支付流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5支付流程"}},[t._v("#")]),t._v(" h5支付流程")]),t._v(" "),s("p",[t._v("前端请求下单，后台接受保存订单，后台调用接口下单发给微信支付后台")]),t._v(" "),s("p",[t._v("微信后台返回跳转的mwep_url给后台，后台发给前端，")]),t._v(" "),s("p",[t._v("前端302跳转微信app，他会验证url的prepay_id，")]),t._v(" "),s("p",[t._v("微信里面操作支付，他会通知微信后台，微信后台返回结果给后端")]),t._v(" "),s("p",[t._v("后台写一个接口处理结果，给前端返回结果")]),t._v(" "),s("p",[t._v("代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);