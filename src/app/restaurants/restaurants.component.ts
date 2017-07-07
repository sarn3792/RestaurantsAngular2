import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [ RestaurantService ]
})

export class RestaurantsComponent implements OnInit {

	restaurants = [];
  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
  	this.restaurantService.getRestaurants().then(response => {
  		this.restaurants = response;
  		
  	});
  }

}
