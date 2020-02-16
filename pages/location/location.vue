<template>
	<map :latitude="latitude" :longitude="longitude" :scale="scale" :markers="covers"></map>
</template>

<script>
	export default {
		data() {
			return {
				scale: 17,
				latitude: 32.597345,
				longitude: 112.097519,
				covers: [
					{
						width: 66,
						height: 66,
						latitude: 32.597345,
						longitude: 112.097519,
						iconPath: '../../static/marker.jpg',
						callout: {
							padding: 8,
							fontSize: 20,
							borderWidth: 1,
							borderRadius: 8,
							color: '#000000',
							display: 'ALWAYS',
							content: '益百购物',
							borderColor: '#C0C0C0',
						}
					},
				]
			}
		}
	}
</script>

<style lang="scss">
	map {
		width: 100%;
		height: 100%!important;
	}
</style>
