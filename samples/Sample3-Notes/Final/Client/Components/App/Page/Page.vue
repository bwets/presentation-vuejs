<script lang="ts">
	import { Vue, Component, Prop, Watch } from "vue-property-decorator"
	
	@Component({})
	export default class AppPage extends Vue {
		navigate(...segments:Array<string>) {
			if (segments && segments.length > 0) {
				let path:string = "/" + segments.join("/");
				path = path.replace("//","/");
				console.debug("navigate", path);
				this.$router.push(path);
			}
			
		}
	}

</script>