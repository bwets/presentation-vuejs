import Vue from "vue";
import VueRouter from "vue-router";

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(VueRouter);

import App from "./App";

import ListPage from "./Pages/List";
import ViewPage from "./Pages/View";
import EditPage from "./Pages/Edit";

const router = new VueRouter({
	routes: [
		{ path: "/", component: ListPage},
		{ path: "/search", component: ListPage, props: true },
		{ path: "/view/:id", component: ViewPage, props: true },
		{ path: "/edit/:id?", component: EditPage, props: true }
		
	]

});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})



