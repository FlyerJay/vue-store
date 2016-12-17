import Vue from 'vue'
import Vuex from "vuex"
import routes from "./router/routes"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
var store = new Vuex.Store({

})
const router = new VueRouter({
	routes,
	mode:"history",
	base:"/"
})

new Vue({
	el:"#app",
	router,
})
