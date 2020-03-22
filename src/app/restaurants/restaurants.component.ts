import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from '../restaurants-service.service';
import { MatDialog } from '@angular/material';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
 
export class RestaurantsComponent implements OnInit {
  restaurants : any[] = []; 
  countries : any[] = [];
  country : string = "us";

  length : number;
  pageSize : number = 100;
  pageEvent: PageEvent;
  constructor(    
    protected restaurantService : RestaurantsServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.selectedCountry();

    this.restaurantService.getCountries()
    .subscribe(
      (data) => {
        this.countries = data['countries'];
      }, 
      (error) => {
        console.error(error);
      }
    );
  }
  ChangePage(event){
    this.restaurantService.getPagination(this.country, event.pageIndex).subscribe(
      (data) => {
        this.restaurants = data['restaurants'];
        this.length = data['total_entries']
      },
      (error) => {
        console.error(error);
      }
    );
  }
  openDetail(restaurant){
    this.dialog.open(
      RestaurantDetailComponent,{ width:"800px", data: restaurant}
    );    
  }
  selectedCountry(){
    this.restaurantService.getRestaurants(this.country)
    .subscribe(
      (data) => {
        this.restaurants = data['restaurants'];
        this.length = data['total_entries']
      },
      (error) => {
        console.error(error);
      }
    );
    
  }
}
