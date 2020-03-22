import { YourReservationsComponent } from './your-reservations/your-reservations.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


const routes: Routes = [
{path: '', component: RestaurantsComponent },
{path: 'reservate', component: HomeComponent },
{path: 'restaurants', component: RestaurantsComponent },
{path: 'about', component: HomeComponent },
{path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'yourreservations', component: YourReservationsComponent },
{path: 'restaurants/:restaurantId', component: RestaurantDetailComponent },
{path: '*', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
