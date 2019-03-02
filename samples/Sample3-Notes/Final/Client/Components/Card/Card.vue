<template>
	<div style="padding:5px">
		<v-toolbar color="#0491d4" dense dark class="card_toolbar">
			<v-toolbar-side-icon @click="toggle">
				<fa-icon v-if="expandedValue" icon="angle-up" size="2x"></fa-icon>
				<fa-icon v-if="!expandedValue" icon="chevron-circle-down" size="2x"></fa-icon>
			</v-toolbar-side-icon>
			<v-toolbar-title @click="toggle" style="font-weight:bold;font-size:1.2rem;cursor:pointer;user-select: none;">{{title}}</v-toolbar-title>
			<v-spacer @click="toggle"></v-spacer>
			<slot name="buttons"></slot>

		</v-toolbar>

		<v-card style="padding:10px" v-show="expandedValue">
			<slot></slot>
		</v-card>

	</div>
</template>
<script lang="ts">
	import { Vue, Component, Prop, Watch } from "vue-property-decorator"

	import { LocalData } from "~/Framework/Core";

	@Component({})
	export default class Card extends Vue {

		@Prop() state!: string | null;
		@Prop() title!: string | null;
		@Prop({ default: true }) expanded!:boolean;
		@Prop() cssClass!: string | null;

		expandedValue:boolean = false;

		get cardClass():string[] {
			return ["card", this.expandedValue ? "expanded" : "closed"];
		}
		get stateName(): string {
			return "card::" + this.state;
		}

		setExpanded(value: boolean) {
			this.expandedValue = value;
			if (this.state) {
				this.writeState(value);
			}
		}
		readState(defaultValue:boolean):boolean {
			var value = LocalData.get(this.stateName) == 'true';
			if (value === undefined || value === null) {
				return defaultValue;
			} else {
				return value;
			}
		}
		writeState(value:boolean) {
			LocalData.set(this.stateName, value.toString());
		}
		toggle() {
			this.setExpanded(!this.expandedValue);
		}

		mounted() {

			this.expandedValue = this.expanded;
			if (this.state) {
				this.setExpanded(this.readState(this.expandedValue));
			} else {
				this.setExpanded(this.expandedValue);
			}
		}
	}
</script>
<style lang="scss">
	@import "Card.vue";
</style>