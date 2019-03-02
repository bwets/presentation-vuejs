<template>
	<div class="app__menu">
		<template v-for="item in menu.items">
			<a class="section" @click="handleClick(item)">{{item.text}}</a>
			<a class="section level-1" v-for="item1 in item.items" @click="handleClick(item1)">{{item1.text}}</a>
		</template>

	</div>
</template>
<script>
	import { Vue, Component, Prop, Inject } from "vue-property-decorator";
	import { Shell } from "~/Framework/Core";

	@Component
	export default class AppMenu extends Vue {

		get menu() {
			return Shell.menu;
		}
		handleClick(item) {
			if (item.url) {
				this.$router.push(item.url);
			} else {
				Shell.menu.click(item)
			}
			
		}

	}

</script>
<style lang="scss" scoped>
	@import "AppMenu";
</style>