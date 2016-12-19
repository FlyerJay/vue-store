<template>
	<ul class="pagenation">
		<li class="prev-page page-item" @click="prevPage">上一页</li>
		<li class="more-prev page-item" v-if="pageRange[0]>1"><i class="iconfont icon-more"></i></li>
		<li class="page-item" @click="pageClick(item)" v-for="item in pageRange">{{item}}</li>
		<li class="more-nexr page-item" v-if="pageRange[pageRange.length-1]<totalPage"><i class="iconfont icon-more"></i></li>
		<li class="next-page page-item" @click="nextPage">下一页</li>
	</ul>
</template>
<script type="text/ecmascript-6">
	export default{
		data () {
			return {
				pageSize:3,
				totalPage:10,
				currentPage:0,
				pageRange:[],
				showCount:5,
			}
		},
		watch:{
			currentPage:function(val){
				this.updateRange();
			}
		},
		methods:{
			prevPage:function(){
				if(this.currentPage > 0){
					this.currentPage --;
				}
			},
			nextPage:function(){
				if(this.currentPage < this.totalPage){
					this.currentPage ++;
				}
			},
			pageClick:function(item){
				this.currentPage = item;
				console.log(this.currentPage)
			},
			updateRange:function(){
				var start;
				var end;
				if(this.totalPage <= this.showCount){
					start = 1;
					end = (this.totalPage==0?1:this.totalPage);
				}else if(this.currentPage >= this.totalPage - Math.floor(this.showCount/2)){
					start = this.totalPage - this.showCount;
					end = this.totalPage;
				}else{
					var temp = (this.currentPage - Math.floor(this.showCount/2)) <= 0 ?1:(this.currentPage - Math.floor(this.showCount/2));
					start = temp;
					end = temp + this.showCount - 1;
				}
				this.pageRange = [];
				for(var i=start;i<=end;i++){
					this.pageRange.push(i);
				}
			},
		},
		created:function(){
			this.updateRange();
		}

	}
</script>
<style scoped lang="less">
	@import "../style/iconfont";
	.pagenation{
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0px;
		padding: 0px;
	}
	.page-item{
		padding: 5px 10px;
		margin: 0px 3px;
		color:#fff;
		background-color:#8bba2e; 
		border-radius: 5px;
		cursor:pointer;
	}
</style>