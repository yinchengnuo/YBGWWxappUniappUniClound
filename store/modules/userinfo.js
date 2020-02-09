export default {
	namespaced: true,
	state: {
		isAdmin: false
	},
	mutations: {
		isAdmin(state, payload) {
			state.isAdmin = payload
		}
	}
}