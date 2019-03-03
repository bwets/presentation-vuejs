import { NoteStatus } from "./Enums";

export interface Note {
	id:string;
	title:string;
	status:NoteStatus;
	body:string;
	tags:string[]
}