import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsServiceService {

  constructor(protected http: HttpClient) { }
  getRestaurants() {
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?country=us');
  }
}
