import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService{
	constructor(private http: Http){

	}

	getRestaurants(){
		//console.log("Obteniendo desde el API");
		return this.http.get('https://stark-river-41252.herokuapp.com/api/restaurants')
		.map((response: Response) => response.json())
		.toPromise();
	}

	getRestaurant(id: string){
		return this.http.get('https://stark-river-41252.herokuapp.com/api/restaurants/' + id)
		.map((response: Response) => response.json())
		.toPromise();
	}
}