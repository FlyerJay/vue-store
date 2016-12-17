<template>
	<div class="topic-recommend">
		<h1 class="topic">{{topic}}</h1>
		<ul class="topic-nav">
			<li class="topic-nav-item" v-for="(item,index) in topicNavs">{{item.title}}</li>
		</ul>
		<div class="recommend-container">
			<div class="highly-recommend" :style="{'background-image':'url('+recommendLists[0].image+')'}"></div>
			<div class="recommend-list">
				<div class="recommend-item" v-for="(item,index) in recommendLists" v-if="index > 0">
					<div class="exhibition-image" :style="{'background-image':'url('+item.image+''}"></div>
					<div class="item-info">
						<span class="name">{{item.name}}</span>
						<div class="price">
							<span class="sale-price">￥{{item.sale}}</span>
							<span class="refer-price">参考价:￥{{item.refer}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		data () {
			return {
				topic:"进口水果专区",
				topicNavs:[
					{
						title:"猕猴桃"
					},
					{
						title:"法国苹果"
					},	
					{
						title:"智利李子"
					},	
					{
						title:"秘鲁红提"
					},	
					{
						title:"西班牙蜜提"
					},	
					{
						title:"意大利kiwi"
					},
					{
						title:"智利樱桃"
					},	
					{
						title:"智利提子"
					}
				],
				recommendLists:[
					{
						name:"智利蓝莓",
						image:"http://d9.yihaodianimg.com/N08/M03/CD/0C/ChEi1laxX66ANm3oAAEGvtBAPn802200_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
					{
						name:"智利蓝莓",
						image:"http://d7.yihaodianimg.com/N09/M08/74/88/ChEi11gz8ZGARAYyAAbZoNW_Y8M65600_360x360.jpg",
						sale:60,
						refer:99
					},
				]
			}
		}
	}
</script>
<style scoped>
	.topic{
		margin: 0px;
		color:#87888c;
		text-align: left;
		font-weight: normal;
	}
	.topic-nav{
		display: flex;
		flex-direction: row;
		list-style: none;
		justify-content: flex-end;
		margin: 0px;
		padding: 10px 0px;
		color:#aaa;
	}
	.topic-nav-item{
		padding: 0 20px;
		border-right: 1px solid #eaeaea;
		cursor: pointer;
	}
	.topic-nav li:last-child{
		padding-right: 0px;
		border-right: none;
	}
	.recommend-container{
		background-color: #fff;
		border: 2px solid #ededed;
		padding: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.highly-recommend{
		height: 85vh;
		width: 24%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.recommend-list{
		display: flex;
		flex-flow:row wrap;
		width: 75%;
		justify-content: space-between;
		align-content:space-between;
	}
	.recommend-item{
		width: 23%;
		height: 49%;
		border: 1px solid #eee;
		margin-left: 1%;
	}
	.exhibition-image{
		height: 35vh;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.item-info{
		height: 6vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 5px 10px;
		text-align: left;
		background-color: #f4f4f4;
		font-size: 13px;
	}
	.price{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.sale-price{
		color:#ea0058;
	}
	.refer-price{
		color:#8c999f;
		text-decoration: line-through;
	}
</style>