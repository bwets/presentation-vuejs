import axios from "axios";


export class Service {
	private _relativeUrl: string;
	private _baseUrl: string;


	constructor(relativeUrl: string) {
		this._baseUrl = "/api/";
		this._relativeUrl = relativeUrl;
	}

	getUrl(last: string): string {
		let url = this._baseUrl;
		if (this._relativeUrl !== null && this._relativeUrl !== undefined) {
			url = url + this._relativeUrl + "/";
		}
		if (last) {
			url = url + last;
		}

		return url;


	}
	async get(url: string, options: any = {}) {
		url = this.getUrl(url);
		console.debug("service.get", url, options);
		const response = await axios.get(url, options);
		return this.handle(response);

	}
	async post(url: string, content: any, options: any = {}) {
		url = this.getUrl(url);
		console.debug("service.post", url, options);
		options.validateStatus = (status: number) => status < 500; // Reject only if the status code is greater than or equal to 500
		const response = await axios.post(url, content, options);
		return this.handle(response);
	}

	async delete(url: string, params: any | null = null) {
		url = this.getUrl(url);
		await axios.delete(url, params);
	}


	handle(response: any) {
		if (response.status === 499) {
			const error = response.data;
			console.error(error);
			throw error.message;
		} else {
			if (response.data && response.data.result && response.data.result.value)
				return response.data.result.value;
			else
				return response.data;
		}

	}

	

}