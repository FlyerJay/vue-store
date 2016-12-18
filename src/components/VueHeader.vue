<template>
	<div class="header">
		<div class="navbar">
			<div class="nav-item" :class="{'active':page==index}" @click="navTo(index)" v-for="(item,index) in items">
				<span>{{item}}</span>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import {mapState,mapMutations} from "vuex"
	export default {
		data () {
			return {
				items:["首页","进口水果","国产水果","特价"],
			}
		},
		methods:{
			navTo:function(index){
				this.$store.commit("changePage",index);
			},
			...mapMutations([
				"changePage"
			])
		},
		watch:{
			page:function(val){
				switch(val){
					case 0:
						this.$router.push("index");
						break;
					case 1:
						this.$router.push("entrance");
						break;
				}
			}
		},
		computed:{
			...mapState([
				"page"
			])
		}
	}
</script>
<style scoped>
	.header-info{
		height:240px;
		background-image:url(../assets/head_bg.jpg);
		background-size: 100% 200%;
		background-position: center;
		background-repeat: no-repeat;
		background-blend-mode: multiply;
	}
	.navbar{
		display: flex;
		flex-direction: row;
		height: 40px;
		align-items: center;
		padding: 0px 10%;
		background-color: #8bba2e;
	}
	.nav-item{
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: 0.5s;
		padding: 0 40px;
	}
	.nav-item.active{
		background-color: #6a9e00;
	}
	.nav-item span{
		color: #fff;
	}
</style>