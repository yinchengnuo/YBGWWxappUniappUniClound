'use strict';
exports.main = async (swiper, context) => {
	return await uniCloud.database().collection('app').where({ name: 'yibaigouwu'  }).update({ swiper })
}
