<template>
	<form v-if="note">
		<v-text-field v-model="note.title"
					  :counter="100"
					  label="Title"
					  required></v-text-field>

		<v-textarea v-model="note.body"
					:counter="1000"
					rows="20"
					label="Content"
					required></v-textarea>

		<v-select v-model="note.tags"
				  :items="tags"
				  label="Tags"
				  chips
				  multiple
				  required></v-select>

		<div class="text-xs-center">
			<v-btn round color="primary" dark @click="save">Save</v-btn>
		</div>
	</form>

	
</template>
<script lang="ts">
	import { Vue, Component, Prop, Watch } from "vue-property-decorator"
	import { NoteStatus, Note, NotesService } from "~/Domains/Notes"

	@Component
	export default class EditPage extends Vue {
		@Prop() id!: string | null;
		note: Note | null = null;

		tags:string[] = ["New", "Tag 1", "Tag 2"];
		async mounted() {
			if (this.id) {
				const service = new NotesService();
				this.note = await service.get(this.id);
			}
			else {
				this.note = {
					id: "",
					title: "",
					status: NoteStatus.Draft,
					body: "",
					tags: ["New"]
				};


			}

		}

		async save() {
			const service = new NotesService();
			if (this.note) {
				this.note = await service.save(this.note);
				this.$router.push("/search");
			}
		}
	}

</script>

