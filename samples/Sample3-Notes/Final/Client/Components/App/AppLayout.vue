<template>

	<div class="shell_container">
		<template v-if="getSignedIn()">
			<div class="topbar">
				<top-bar></top-bar>
			</div>
			<div class="shell_app" data-app="true">
				<div class="app__selector">
					<app-selector></app-selector>
				</div>
				<div class="app__container">
					<div class="app__contents">
						<slot name="contents"></slot>
					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<slot name="contents"></slot>
		</template>
	</div>

</template>
<script>
	import AppSelector from "./AppSelector/AppSelector.vue";
	import TopBar from "./TopBar/TopBar.vue";
	import { Vue, Component, Prop, Provide, Watch } from "vue-property-decorator";
	import { Login, Shell } from "~/Framework/Core";
	import { DefaultRoutes } from "~/Framework/Routing";
	@Component({ components: { AppSelector, TopBar } })
	export default class AppLayout extends Vue {
		get segments() {
			return Shell.navigation.segments;
		}

		getSignedIn() {
			// Return false if default routes even if already log-in

			var defaultRoute = DefaultRoutes.find(x => x.path.toLowerCase() === this.$route.path.toLowerCase());

			if (defaultRoute && !defaultRoute.displayInLayout) {
				return false;
			}

			return Login.signedIn;
		}
	}
</script>
<style lang="scss">
	@import "AppLayout";
</style>