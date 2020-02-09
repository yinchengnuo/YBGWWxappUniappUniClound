'use strict';
exports.main = async (event, context) => {
	return await uniCloud.database().collection('good').where({ _id: event._id }).update({ ...event.data })
}
