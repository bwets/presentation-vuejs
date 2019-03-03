import axios from "axios";

import { Note } from "~/Domains/Notes";

export class NotesService {

	baseUrl: string = "/api/notes/";

	constructor() {
	}

	async get(id: string): Promise<Note> {
		const response = await axios.get(this.baseUrl + id);
		return response.data;
	}

	async save(note: Note): Promise<Note> {
		const response = await axios.post(this.baseUrl, note);
		return response.data;
	}

	async query(): Promise<Note[]> {
		const response = await axios.get(this.baseUrl);
		return response.data;
	}

	async delete(id: string) {
		await axios.delete(this.baseUrl + id);
	}
}


