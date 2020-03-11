import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestaurantsServiceService } from '../restaurants-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants : any[] = []; 
  constructor(
    protected restaurantService : RestaurantsServiceService
  ) { }

  ngOnInit() {
    this.restaurantService.getRestaurants()
    .subscribe(
      (data) => {
        this.restaurants = data['restaurants'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
