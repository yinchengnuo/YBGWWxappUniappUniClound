export default {
	computed: {
		isEditMode() { return this.$store.state.app.isEditMode } // 是否为编辑模式
	},
	mounted() {
		this.$refs.pulldownRefresher.pulldown()
	}
}