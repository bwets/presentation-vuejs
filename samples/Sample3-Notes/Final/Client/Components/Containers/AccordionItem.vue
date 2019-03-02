<template>
	<li :class="selected? 'active':''">
		<div class="collapsible-header"><i class="material-icons">{{icon}}</i>{{title}}</div>
		<div class="collapsible-body">
			<slot></slot>
		</div>
	</li>
</template>
<script>
	import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from "vue-property-decorator"
	@Component()
	export default class Item extends Vue {
		@Prop({ type: String, required: true }) title;
		@Prop({ type: String, required: false, default: "whatshot"}) icon;
		@Prop({ type: Boolean, required: false, default: false }) selected;
	}
</script>