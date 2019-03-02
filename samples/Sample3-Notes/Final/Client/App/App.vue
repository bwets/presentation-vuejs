<template>
	<div>
		NOTES APP

		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	import { Vue, Component, Prop, Watch, Provide } from "vue-property-decorator";

	@Component
	export default class App extends Vue {
		async created() {

		}

		async mounted() {
		}
	}
</script>
