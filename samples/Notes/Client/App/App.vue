<template>
	<v-app id="keep">
		<v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
			<v-list dense class="grey lighten-4">
				<template v-for="(item, i) in items">
					<v-layout v-if="item.heading" :key="i" row align-center>
						<v-flex xs6>
							<v-subheader v-if="item.heading">
								{{ item.heading }}
							</v-subheader>
						</v-flex>
						<v-flex xs6 class="text-xs-right">
							<v-btn small flat>edit</v-btn>
						</v-flex>
					</v-layout>
					<v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
					<v-list-tile v-else :key="i" @click="navigate(item)">
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title class="grey--text">
								{{ item.text }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</template>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="amber" app absolute clipped-left>
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
			<span class="title ml-3 mr-5">Notes</span>
			<v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
			<v-spacer></v-spacer>
			
			<v-btn absolute
				   dark
				   fab
				   bottom
				   right
				   color="pink" @click="create">
				<v-icon>add</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<v-container fluid fill-height>
				<v-layout>
					<v-flex>
						<router-view></router-view>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script lang="ts">
	import { Vue, Component, Prop, Watch, Provide } from "vue-property-decorator";
	import Vuetify from 'vuetify';
	import FontAwesome from "~/Components/FontAwesome";

	import { NotesService } from "~/Domains/Notes"

	Vue.use(Vuetify);
	Vue.use(FontAwesome);

	class MenuItem {
		icon:string = "";
		heading:string|null = null;
		divider: boolean = false;
		text:string | null = null;
		url: string | null = null;


	}
	@Component
	export default class App extends Vue {
		async created() {

		}

		drawer:boolean = true;
		get items() {
			return [
				{ icon: 'lightbulb_outline', text: 'Notes', url:"/search" },
				{ divider: true },
				{ icon: 'archive', text: 'Archive' },
				{ icon: 'delete', text: 'Trash' },
				{ divider: true },
				{ icon: 'settings', text: 'Settings' },
				{ icon: 'chat_bubble', text: 'Trash' },
				{ icon: 'help', text: 'Help' },
			]
		}

		navigate(item:MenuItem) {
			if (item.url) {
				this.$router.push(item.url);
			}
		}

		create() {
			this.$router.push("/edit");
		}
		async mounted() {
			
		}
	}
</script>

<style lang="sass">
	@import "../../node_modules/vuetify/dist/vuetify.css";
</style>