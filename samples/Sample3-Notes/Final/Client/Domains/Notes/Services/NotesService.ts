import { Service } from "~/Framework/Core";
import { Note } from "~/Domains/Notes";

export class NotesService extends Service {
	constructor() {
		super("notes");
	}

	async get(id: string): Promise<Note> {
		return await super.get(id);
	}

	async query(): Promise<Note[]> {
		return await super.get("list");
	}

}


