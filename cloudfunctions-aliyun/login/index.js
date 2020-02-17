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
	return { openid }
}
