import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from '../restaurants-service.service';
import { MatDialog } from '@angular/material';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants : any[] = []; 
  constructor(    
    protected restaurantService : RestaurantsServiceService,
    public dialog: MatDialog
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
  openDetail(){
    this.dialog.open(
      RestaurantDetailComponent
    );
  }
}
