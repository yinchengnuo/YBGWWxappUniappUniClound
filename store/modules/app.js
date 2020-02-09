export default {
	namespaced: true,
	state: {
		isEditMode: false
	},
	mutations: {
		isEditMode(state, payload) {
			state.isEditMode = payload
		}
	}
}