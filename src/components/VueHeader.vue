<template>
	<div class="header">
		<div class="navbar">
			<div class="nav-item" :class="{'active':active==index}" @click="navTo(index)" v-for="(item,index) in items">
				<span>{{item}}</span>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data () {
			return {
				items:["首页","进口水果","国产水果","特价"],
				active:0
			}
		},
		methods:{
			navTo:function(index){
				this.active = index;
			}
		},
		watch:{
			active:function(val){
				switch(val){
					case 0:
						this.$router.push("index");
						break;
					case 1:
						this.$router.push("entrance");
						break;
				}
			}
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