import { NoteStatus } from "./Enums";

export interface Note {
	title:string;
	status:NoteStatus;
	body:string;
	tags:string[]
}