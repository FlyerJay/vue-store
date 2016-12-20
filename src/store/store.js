export default{
	state:{
		page: 0,
		banners:[],
	},
	mutations: {
		changePage(state, index){
			state.page = index;
		},
		updateBanners(state,banners){
			state.banners = banners;
		}
	}
}