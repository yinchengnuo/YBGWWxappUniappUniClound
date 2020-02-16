'use strict';
exports.main = async (event, context) => {
	const { data: [{ swiper }] } = await uniCloud.database().collection('app').limit(1).get()
	return swiper
}
