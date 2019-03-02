<template>
	<scrollable class="page" style="padding:0">
		<toolbar>
			<slot name="toolbar"></slot>
		</toolbar>
		<slot name="fixed"></slot>
		<div :class="layoutClasses">
			<div class="body">
				<slot></slot>
			</div>
			<div class="sidebar">
				<slot name="sidebar"></slot>
			</div>
		</div>


	</scrollable>
</template>
<script>
	import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from "vue-property-decorator"
	@Component()
	export default class Page extends Vue {
		get hasToolbar() {
			return this.$slots.toolbar;
		}
		get layoutClasses() {
			return {
				"page__layout": true,
				"enableSidebar": this.$slots.sidebar

			}
		}


	}
</script>