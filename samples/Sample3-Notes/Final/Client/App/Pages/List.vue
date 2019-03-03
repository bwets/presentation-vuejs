<template>
	<div style="display:flex;flex-direction:row;flex-flow:wrap;height:100%;overflow-y:auto">
		<div v-for="n in notes" style="padding:10px">
			<note-view :note="n" @remove="remove" @edit="edit" @share="share" style="max-width:200px"/>
		</div>
	</div>
</template>
<script lang="ts">
	import { Vue, Component, Prop, Watch } from "vue-property-decorator"
	import { Notifications } from "~/Framework/Core";

	import { Note, NotesService } from "~/Domains/Notes"
	import NoteView from "~/App/Components/NoteView";


	@Component({ components: { NoteView } })
	export default class ListPage extends Vue {

		notes: Note[] = [];

		async refresh() {
			const service = new NotesService();
			this.notes = await service.query();

		}

		share(note: Note) {
			Notifications.error("Not implemented");
		}
		edit(note: Note) {
			this.$router.push("/edit/" + note.id);
		}

		async remove(note: Note) {
			const service = new NotesService();
			try {
				await service.delete(note.id);
				Notifications.success("Note deleted");
				await this.refresh();
			}
			catch{
				Notifications.success("An error occured");

			}


		}
		async mounted() {
			await this.refresh();
		}
	}

</script>

