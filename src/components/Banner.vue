<template>
	<div class="banner">
		<div class="banner-list" :style="{width:banners.length*100+'vw',left:'-'+show*100+'vw'}">
			<div class="banner-item" v-for="(item,index) in banners" :style="{'background-image':'url('+item.image+')','left':index*100+'vw'}">
				<div class="item-info">
					<p class="title">{{item.title}}</p>
					<p class="description">{{item.description}}</p>
				</div>
			</div>
		</div>
		<div class="banner-nav-list">
			<div class="nav-item" @click="change(index)" :class="{active:index==show}" v-for="(item,index) in banners"></div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import R from "../resource";
	import {mapState} from "vuex";
	export default{
		data () {
			return {
				show:0,
				auto:true,
				interval:10000,
				playThread:"",
			}
		},
		methods:{
			next:function(){
				this.show+=1;
				this.show%=this.banners.length
			},
			change:function(index){
				this.show = index;
			},
			pause:function(){
				clearTimeout(this.playThread);
			},
			play:function(){
				var self = this;
				self.playThread = setTimeout(function(){
					self.next();
					self.autoplay();
				},self.interval)
			},
			autoplay:function(){
				var self = this;
				self.playThread = setTimeout(function(){
					self.next();
					self.autoplay();
				},self.interval)
			}
		},
		computed:{
			...mapState([
				"banners"
			])
		},
		watch:{
			auto:function(val){
				if(val){
					this.pause()
				}else{
					this.play();
				}
			}
		},
		created:function(){
			var self = this;
			R.getBanners(this,function(res){
				self.$store.commit("updateBanners",res.data.list);
			})
			if(this.auto){
				this.autoplay();
			}
		}
	}
</script>
<style scoped>
	.banner{
		height: 30vw;
		color: #fff;
		overflow: hidden;
		position: relative;
		cursor:pointer;
	}
	.banner-list{
		position: absolute;
		overflow: auto;
		height: 100%;
		transition:1s;
	}
	.banner-item{
		width: 100vw;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		display: inline-block;
		position: absolute;
	}
	.banner-nav-list{
		display: flex;
		flex-direction: row;
		height: 10px;
		position: absolute;
		bottom: 30px;
		width: 100%;
		justify-content: center;
	}
	.nav-item{
		background-color: rgba(255,255,255,0.3);
		height: 100%;
		width: 20px;
		margin-left: 5px;
	}
	.nav-item.active{
		background-color:#598111;
	}
</style>