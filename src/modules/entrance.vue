<template>
	<div class="entrance">
		<vue-header></vue-header>
		<banner></banner>
		<div class="content">
			<topic-recommend></topic-recommend>
			<topic-recommend></topic-recommend>
		</div>
	</div>
</template>
<script>
	import components from "../components"
	export default{
		components:{
			...components,
		},
		data () {
			return {}
		}
	}
</script>
<style scoped>
	.content{
		padding: 20px 5%;
		background-color: #f4f4f4;
	}
</style>

