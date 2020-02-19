'use strict';
exports.main = async (event, context) => {
	const { total } = await uniCloud.database().collection('good').where({ type: new RegExp(`^${event.type}-`) }).count()
	let list = []
	for(let i = 0; i < Math.ceil(total / 100); i ++) {
		const { data } = await uniCloud.database().collection('good').where({ type: new RegExp(`^${event.type}-`) }).skip(i * 100).orderBy("addTime", "desc").get()
		list = [...list, ...data]
	}
	return [
		list.filter(e => e.type === `${event.type}-1`),
		list.filter(e => e.type === `${event.type}-2`),
		list.filter(e => e.type === `${event.type}-3`),
		list.filter(e => e.type === `${event.type}-4`),
		list.filter(e => e.type === `${event.type}-5`)
	]
}
