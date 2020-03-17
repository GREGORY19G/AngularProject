import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant : any;
  constructor( @Inject(MAT_DIALOG_DATA) private data: any ) { 
    this.restaurant= data;
  }

  ngOnInit() {
    
  }

}
