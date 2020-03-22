import { RestaurantsServiceService } from './../restaurants-service.service';
import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {ReservateService} from '../reservate.service';
export interface DialogData {
  Date: string;
  Tyme: string;
}

@Component({
  selector: 'app-your-reservations',
  templateUrl: './your-reservations.component.html',
  styleUrls: ['./your-reservations.component.css']
})
export class YourReservationsComponent implements OnInit {

  Date: Date;
  Tyme: string;
  reservations: any[]=[];
  
  constructor( 
  protected reservateService: ReservateService,
  protected restaurantService: RestaurantsServiceService,

  ) { 
  }

  ngOnInit() {
    this.reservateService.getReservations()
    .subscribe(
      (data) => {
        this.reservations = data;
      }, 
      (error) => {
        console.error(error);
      }
    );
  }
  getRestaurant(restaurantId){
      return this.restaurantService.getRestaurant(restaurantId);
  }



}


