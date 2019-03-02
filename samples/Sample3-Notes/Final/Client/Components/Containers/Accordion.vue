<template>
	<ul class="collapsible">
		<slot></slot>
	</ul>
</template>

<script>
	import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from "vue-property-decorator"
	@Component()
	export default class Accordion extends Vue {
		mounted() {
			$('.collapsible').collapsible();
		}
	}
</script>