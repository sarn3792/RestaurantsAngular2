import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import {environment} from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class CommentService {
	//private url = environment.API_URL;
	private apiUrl = 'http://stark-river-41252.herokuapp.com/api/saucers/';

	constructor(private http: Http) {}

	getComments(saucerId: string){
		return this.http.get(this.apiUrl + saucerId + '/comments')
			.map((response: Response) => response.json())
			.toPromise();
	}

	sendComment(saucerId: string, data){
		data.date = new Date().toUTCString();

		let body = JSON.stringify(data);

		return this.http.post(this.apiUrl + saucerId + '/comments', data)
					.map((response: Response) => response.json())
					.toPromise();
	}
}