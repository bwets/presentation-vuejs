Router
- In a single page application
- Sync URL and displayed content
- Vue Router library

***
	DC
	improve the responsiveness of your web application by rendering the pages once and display them dynamically based on the current context of the application
	Vue router library is official, but you can use whatever routing library you want
	
	
:::
# Implementation 
- Import it in the app
``` json
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```
- In the template
``` json
<nav>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/about">About</router-link>
</nav>
<router-view></router-view>
```

***
	DC
	router-link to define the URLs
	router-view is the component is where the Vue Router will put the content that matches the current URL.
		
	
:::
# Implementation 
- Define the routes
``` json
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: About }
  ]
})
```
- Routes can be named
``` json
{ name: 'contact', path: '/contact', component: Contact }
```

***
	DC
	Pass the routes to the initialization of the router object		
	
	
:::
# Implementation 
- Router needs to be passed to the Vue root instance
``` json
new Vue({
  router
}).$mount('#app')
```
- Change router
``` json
this.$router.push({ path: 'contact' })
```
***
	DC
	