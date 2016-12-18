<template>
	<div class="vue-footer">
		<div class="footer-content">
			<div class="items">
				<div class="icon">
					<i class="iconfont icon-phone"></i>
				</div>
				<span>客服热线</span>
			</div>
			<div class="items">
				<div class="icon">
					<i class="iconfont icon-thander"></i>
				</div>
				<span>闪电发货</span>
			</div>
			<div class="items">
				<div class="icon">
					<i class="iconfont icon-photo"></i>
				</div>
				<span>实物拍照</span>
			</div>
			<div class="items">
				<div class="icon">
					<i class="iconfont icon-xin"></i>
				</div>
				<span>正品货源</span>
			</div>
			<div class="items">
				<div class="icon">
					<i class="iconfont icon-7days"></i>
				</div>
				<span>7天退换</span>
			</div>
		</div>
		<ul class="about-website">
			<li>关于我们</li>
			<li>退换货政策</li>
			<li>代理合作</li>
			<li>联系我们</li>
			<li>加入我们</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data () {
			return {

			}
		}
	}
</script>
<style scoped lang="less">
	@import "../style/iconfont";
	.footer-content{
		display: flex;
		flex: row;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border:2px solid #ededed;
	}
	.items{
		height: 60px;
		width: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 10px 0px;
		font-size: 12px;
	}
	.icon{
		background-color: #cd0428;
		display: inline-block;
		height: 40px;
		width: 40px;
		position: relative;
		border-radius: 20px;
	}
	.iconfont{
		font-size: 25px;
		color: #fff;
		position: absolute;
		left: 50%;
		margin-left: -13px;
		top:50%;
		margin-top:-14px;
	}
	.about-website{
		padding: 0px;
		margin: 0px;
		margin-top:40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		list-style: none;
		font-size: 10px;
		color:#aaa;
	}
	.about-website li{
		margin-left: 20px;
		cursor: pointer;
	}
</style>