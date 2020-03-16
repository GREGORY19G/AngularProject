import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsServiceService } from '../restaurants-service.service';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant;
  constructor(
  ) { }

  ngOnInit() {
    
  }

}
