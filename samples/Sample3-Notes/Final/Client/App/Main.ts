import Vue from "vue";
import VueRouter from "vue-router";

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(VueRouter);

import App from "./App";
import HomePage from "./Pages/Home";
import ListPage from "./Pages/List";
import ViewPage from "./Pages/View";

const router = new VueRouter({
	routes: [
		{ path: "/", component: HomePage},
		{ path: "/search", component: ListPage, props: true },
		{ path: "/view/:id", component: ViewPage, props: true }
	]

});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})



