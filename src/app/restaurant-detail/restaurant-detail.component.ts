import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReservateService} from '../reservate.service';
import { MatDialog } from '@angular/material';
export interface DialogData {
  Date: string;
  Tyme: string;
}
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  Date: Date;
  Tyme: string;

  restaurant : any;
  
  constructor( @Inject(MAT_DIALOG_DATA) private data: any ,
  public dialog: MatDialog,
  protected reservateService: ReservateService

  ) { 
    this.restaurant= data;
  }

  ngOnInit() {
    
  }
  
 ToTime(date, timeString){
    var timeTokens = timeString.split(':');
    return new Date(date.getYear(),date.getMonth(),date.getDay(), timeTokens[0], timeTokens[1], timeTokens[2]);
}

Reserve() {
  if(this.Tyme!=null && this.Date!=null)
  var dateTyme = this.ToTime(this.Date,this.Tyme)
       this.reservateService.createReservation({
        userId: "0001",
        restaurantId: this.restaurant.id,
        People: 2,
        date: dateTyme
       }) 
  }
}
