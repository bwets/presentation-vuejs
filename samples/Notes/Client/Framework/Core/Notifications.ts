import  * as toastr  from "toastr";

export class Notifications {
	public static success(message:string, title:string = "Success", permanent:boolean = false) {
		console.info(title, message);
		toastr.options.progressBar = true;
		toastr.success(message, title);
	}

	public static exception(e:any, message:string, title:string = "Error", permanent:boolean = false) {
		console.error(title, message, e);
		toastr.options.progressBar = true;
		toastr.clear();
		toastr.error(message, title);
	}

	public static error(message:string, title:string = "Error", permanent:boolean = false) {
		console.error(title, message);
		toastr.options.progressBar = true;
		toastr.clear();
		toastr.error(message, title);
	}

	public static notImplemented() {
		this.error("Not implemented yet");
	}

}


