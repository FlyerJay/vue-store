<template>
	<div class="page-list">
		<div class="list">
			<div class="list-item" v-for="(item,index) in list">
				<div class="good-image" :style="{'background-image':'url('+item.image+')'}"></div>
			</div>
		</div>
		<page></page>
	</div>
</template>
<script type="ecmascript-6">
	import Page from "./Page";
	export default{
		components:{
			Page
		},
		data () {
			return {
				totalPage:10,
				pageSize:3,
				currentPage:1,
				showCount:5,
				list:[
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
					{
						name:"西瓜",
						price:100,
						place:"智利",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
					},
				]
			}
		}
	}
</script>
<style scoped lang="less">
	.list{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row; 
		justify-content: flex-start;
	}
	.list-item{
		height: 300px;
		width:260px;
		border: 1px solid #8bba2e;
		margin-bottom: 10px;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
	}
	.good-image{
		height: 250px;
	}
</style>