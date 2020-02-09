'use strict';
exports.main = async (event, context) => {
	const { data } = await uniCloud.httpclient.request('https://api.weixin.qq.com/sns/jscode2session', {
		dataType: 'json',
		data: {
			appid: 'wxa04b44344aef0a1e',
			secret: '0cfd125e064536cb13a1dfc138163121',
			js_code: event.code,
			grant_type: 'authorization_code'
		}
	})
	return data
}
