import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReservateComponent} from '../reservate/reservate.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant : any;
  constructor( @Inject(MAT_DIALOG_DATA) private data: any ,
  public dialog: MatDialog

  ) { 
    this.restaurant= data;
  }

  ngOnInit() {
    
  }
  Reserve() {
      this.dialog.open(
        ReservateComponent,{ width:"500px", data: this.restaurant}
      );       
  }
}
