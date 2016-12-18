export default{
	state:{
		page: 0,
	},
	mutations: {
		changePage(state, index){
			state.page = index;
		}
	}
}