import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsServiceService } from './restaurants-service.service';
import { HttpClientModule} from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RestaurantsComponent,
    FooterComponent,
    RestaurantDetailComponent
  ],
  entryComponents:[
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [RestaurantsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
