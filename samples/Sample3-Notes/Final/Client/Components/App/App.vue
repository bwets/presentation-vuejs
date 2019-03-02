<script lang="ts">
	import "~/Assets/Style/External/vuetify/vuetify.dashboard.styl";
	import "~/Assets/Style/External/vuetify/hacks.scss";

	import { Vue, Component } from "vue-property-decorator"

	import kycInstaller from "~/Components/Installer";
	Vue.use(kycInstaller);

	import modulesInstaller from "~/Modules/Installer";
	Vue.use(modulesInstaller);

	import customInstaller from "~Custom/Installer";
	Vue.use(customInstaller );

	import "~/Assets/Style/Dashboard";
	import {Shell, Menu} from "~/Framework/Core";

	@Component
	export default class App extends Vue {
		public ready:boolean = false;


		get menu() : Menu {
			return Shell.menu;
		}

	

	
		selectFirstMenuItemIfRoot() {
			// Select first menu item when on app root
			if (this.$route.path === "/" && Shell.menu.items.length !== 0) {
				this.$router.replace(Shell.menu.items[0].url);
			}
		}
	}


</script>
