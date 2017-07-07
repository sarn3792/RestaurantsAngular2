import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RestaurantService } from '../restaurants/restaurant.service';
import { SaucerService } from './saucer.service'

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [RestaurantService, SaucerService]
})
export class SaucersComponent implements OnInit, OnDestroy {
	private restaurantId: string;
	private subscription: Subscription;

	private restaurant = {};
	private saucers = [];

  constructor(
  			private route: ActivatedRoute,
  			private restaurantService : RestaurantService,
  			private saucerService: SaucerService) { }

  ngOnInit() {
  	this.subscription = this.route.params.subscribe(
  		(params: any) =>{
  			this.restaurantId = params['id'];
  			this.restaurantService.getRestaurant(this.restaurantId)
  				.then(response => this.restaurant = response);

  			this.saucerService.getSaucers(this.restaurantId)
  				.then(response => this.saucers = response);
  		}
  	);
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

}