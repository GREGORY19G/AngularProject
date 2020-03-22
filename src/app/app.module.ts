import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatNativeDateModule, MatInputModule, MatSnackBarModule} from '@angular/material';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { YourReservationsComponent } from './your-reservations/your-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RestaurantsComponent,
    FooterComponent,
    RestaurantDetailComponent,
    ReservateComponent,
    LoginComponent,
    RegisterComponent,
    YourReservationsComponent
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
    FormsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MatInputModule, 
    MatSnackBarModule
  ],
  providers: [RestaurantsServiceService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
