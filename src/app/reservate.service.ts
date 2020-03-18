import { Injectable } from '@angular/core';
import { Reservate } from './reservate';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ReservateService {
  private dbPath= '/Reservate';
  ReservateRef: AngularFireList<Reservate> = null;

  constructor( private db: AngularFireDatabase) {
    this.ReservateRef = db.list(this.dbPath);
   }

   createReservation(reservate : Reservate ) : void{
      this.ReservateRef.push(reservate);
   }  
}
