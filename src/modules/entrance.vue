<template>
	<div class="entrance">
		<vue-header></vue-header>
		<banner></banner>
		<div class="content">
			<page-list></page-list>
		</div>
		<div class="footer">
			<vue-footer></vue-footer>
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
		padding: 10px 5%;
		background-color: #f4f4f4;
	}
	.footer{
		padding: 10px 5%;
		background-color: #f4f4f4;
	}
</style>

