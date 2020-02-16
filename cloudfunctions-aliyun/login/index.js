'use strict';
exports.main = async (event, context) => {
	const { data: { openid } } = await uniCloud.httpclient.request('https://api.weixin.qq.com/sns/jscode2session', {
		dataType: 'json',
		data: {
			appid: 'wxad2d524677454fa5',
			secret: '8f3124df9bbd9475849985a0baa5193b',
			js_code: event.code,
			grant_type: 'authorization_code'
		}
	})
	const isAdmin = openid => { // 判断 openid 是否为管理员
		switch (openid) {
			case 'o6DAh5QPb2dq5ybBt1-6z0OQB_Qo': return true // 忙着长大
			case 'o6DAh5cbM9EOtlQ3XHTH4eqyWnVA': return true // 爸
			case 'o6DAh5eJBm0wlGAn0aBAw24bOa1E': return true // 妈
			case 'o6DAh5Y947La8N3gmg51h4SDNJXU': return true // 娟娟
			default: return false
		}
	}
	return { openid, isAdmin: isAdmin(openid) }
}
