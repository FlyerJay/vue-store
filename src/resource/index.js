import config from "../config" 
const R = {};
R.url = "/vuestore";
R.requestType = "GET";
R.getBanners = function(vue,callback){
	this.url = "/vuestore/banner";
	this.requestType = "GET";
	this.ajax(vue,callback);
}
R.ajax = function(vue,callback){
	switch(this.requestType) {
		case "GET":
			vue.$http.get(config.server+this.url).then(res=>{
				callback(res.body);
			})
			break;
		case "POST":
			vue.$http.post(config.server+this.url).then(res=>{
				callback(res.body);
			})
			break;
	}
}

export default R;