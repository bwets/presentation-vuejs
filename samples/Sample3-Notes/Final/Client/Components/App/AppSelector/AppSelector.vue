<template>
	<div class="list" v-if="app">
		<div v-role="a.roles" :class="appClass(a)" v-for="a in apps">
			<div class="list__app__icon highlight" @click="go(a)">
				<fa-icon :icon="a.icon" size="2x"></fa-icon>
			</div>
			<div class="list__app__title highlight" @click="go(a)"><span>{{a.title}}</span></div>
			<template v-if="a.name === app.name">
				<div class="list__app__icon"></div>
				<app-menu></app-menu>
			</template>
		</div>

		<div class="list__app filler">
			<div class="list__app__icon"></div>
			<div class="list__app__title"></div>
		</div>


	</div>
</template>
<script>
	import { Vue, Component, Prop, Inject } from "vue-property-decorator";
	import AppMenu from "~/Components/App/AppMenu/AppMenu";
	import { Shell } from "~/Framework/Core";

	@Component({ components: { AppMenu } })
	export default class AppSelector extends Vue {


		get app() {
			return Shell.app;
		}

		get apps() {
			return Shell.apps;
		}

		appClass(a) {
			let active = a.name === Shell.app.name;
			return {
				list__app: true,
				active
			}
		}
		iconClass(a) {
			return ["fas", a.icon];
		}
		go(a) {
			if (a.url.startsWith("/")) a.url = a.url.substring(1);
			var url = Shell.root.concat(a.url);
			window.location.href = url;
		}
	}

</script>
<style lang="scss" scoped>
	@import "AppSelector";
</style>