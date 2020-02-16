export default {
	namespaced: true,
	state: {
		openid: '',
		isAdmin: false,
	},
	mutations: {
		getUserinfo(state, payload) {
			Object.assign(state, payload)
		}
	}
}