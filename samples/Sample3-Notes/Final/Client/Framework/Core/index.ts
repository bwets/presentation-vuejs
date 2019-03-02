
declare module "vue/types/vue" {
	interface Vue {
		$eventHub: Vue;
	} 
}

export * from "./Notifications";
export * from "./Service";
