<template>
	<v-toolbar right dense color="#808080" flat dark style="cursor:pointer; user-select:none">
		<v-toolbar-title class="white--text">
			<v-btn flat>{{app.title}}</v-btn>
			<span class="segment" v-for="(s, index) in navigation.segments">
				<v-icon v-if="s.title">
					arrow_forward_ios
				</v-icon>

				<template v-if="s.path">
					<toolbar-button @click="navigate(s.path)" >{{s.title}}</toolbar-button>
				</template>
				<template v-else>
					<v-btn flat>{{s.title}}</v-btn>

				</template>

			</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<slot></slot>
		</v-toolbar-items>

	</v-toolbar>
</template>
<script>
	import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from "vue-property-decorator"
	import { Shell } from "~/Framework/Core";


	@Component()
	export default class Toolbar extends Vue {

		get app() {
			return Shell.app;
		}
		get navigation() {
			return Shell.navigation;
		}
		navigate(p) {
			this.$router.push(p);
		}
	}

</script>