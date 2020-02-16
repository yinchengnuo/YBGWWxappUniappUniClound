'use strict';
exports.main = async (event, context) => {
	const { data } = await uniCloud.database().collection('good').where({ type: new RegExp(`^${event.type}-`) }).orderBy("addTime", "desc").get()
	return [
		data.filter(e => e.type === `${event.type}-1`),
		data.filter(e => e.type === `${event.type}-2`),
		data.filter(e => e.type === `${event.type}-3`),
		data.filter(e => e.type === `${event.type}-4`),
		data.filter(e => e.type === `${event.type}-5`)
	]
}
