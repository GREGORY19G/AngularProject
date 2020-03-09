import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'reservate', component: HomeComponent },
{path: 'restaurants', component: RestaurantsComponent },
{path: 'about', component: HomeComponent },
{path: 'login', component: HomeComponent },
{path: '*', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
