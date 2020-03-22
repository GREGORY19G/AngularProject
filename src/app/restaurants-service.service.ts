import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsServiceService {

  constructor(protected http: HttpClient) { }
  getPagination(country, number) {
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?country='+country+'&page='+number+1+'&per_page=100');
  }
  getRestaurants(country) {
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?country='+country+'&page=1&per_page=100');
  }
  getCountries() {
    return this.http.get('http://opentable.herokuapp.com/api/countries');
  }
  getRestaurant(Id) {
    return this.http.get('http://opentable.herokuapp.com/api/restaurants/'+Id);
  }
}
