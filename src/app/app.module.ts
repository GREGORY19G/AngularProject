import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsServiceService } from './restaurants-service.service';
import { HttpClientModule} from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReservateComponent } from './reservate/reservate.component';
import{AngularFireModule} from '@angular/fire'
import{AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RestaurantsComponent,
    FooterComponent,
    RestaurantDetailComponent,
    ReservateComponent
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
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule 
    

  ],
  providers: [RestaurantsServiceService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
