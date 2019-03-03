<template>
	<v-card>
		<v-card-title dark>{{note.title}}</v-card-title>
		<v-card-text>
			{{body}}
			<v-chip v-for="t in note.tags">{{t}}</v-chip>
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn icon @click="remove(note)">
				<v-icon>delete</v-icon>
			</v-btn>
			<v-btn icon @click="edit(note)">
				<v-icon>edit</v-icon>
			</v-btn>
			<v-btn icon @click="share(note)">
				<v-icon>share</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts">
	import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator"
	import { Notifications } from "~/Framework/Core";

	import { Note, NotesService } from "~/Domains/Notes"

	@Component
	export default class ListPage extends Vue {

		@Prop({ default: null }) note!: Note | null;
		@Prop({ default: false }) full!: boolean;

		@Emit("share")
		share(note: Note) {
			return note;
		}


		get body() {
			if(!this.note) return "";

			if (this.full) {
				return this.note.body;
			} else {
				if (this.note.body.length > 100) {
					return this.note.body.substring(1, 100) + "...";
				} else {
					return this.note.body;
				}
				
			}
		}
		@Emit("edit")
		edit(note: Note) {
			return note;
		}

		async remove(note: Note) {
			if (confirm("Are you sure you want to delete the note " + note.title + "?")) {
				this.$emit("remove", note);
			}



		}
	}

</script>

