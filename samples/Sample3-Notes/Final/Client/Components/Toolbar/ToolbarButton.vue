<template>
	<v-btn :flat="displayFlat" :depressed="displayDepressed" :to="to" @click="click" :color="color">
		<v-icon left v-if="icon" dark>{{icon}}</v-icon>
		<slot></slot>
	</v-btn>
</template>
<script>
	import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from "vue-property-decorator"

	@Component()
	export default class ToolbarButton extends Vue {
		@Prop() icon;
		@Prop() to;
        @Prop({type: String, default: ""}) color;

		get hasIcon() {
			return this.icon !== null && this.icon !== undefined 
		}
		@Emit("click")
		click() {

		}

		get displayFlat(){
		    return this.color==="";
		}

		get displayDepressed(){
		    return this.color!=="";
		}
	}

</script>