import Vue from 'vue'
import Vuex from "vuex"
import routes from "./router/routes"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import stores from "./store/store"
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
const store = new Vuex.Store({
	...stores
})
const router = new VueRouter({
	routes,
	mode:"history",
	base:"/"
})

new Vue({
	el:"#app",
	router,
	store
})
