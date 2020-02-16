'use strict';
exports.main = async (event, context) => {
	return await uniCloud.database().collection('good').add({ ...event })
}