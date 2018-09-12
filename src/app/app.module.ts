// The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project. This is where you opt-in
// to the FormsModule.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // Added formsModule So AppModule can support Forms Input ngModel
import { AppRoutingModule, RoutingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
// This Component got added when we run ng generate component cmd.
import { LocationsComponent } from './locations/locations.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { LocationService } from './location.service';
// Http client module
import { HttpClientModule} from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationsDetailsComponent,
    RoutingComponents,
    HotelsComponent,
    PageNotFoundComponent,
    HotelDetailsComponent// This Component got added when we run ng generate component cmd.
  ],
  imports: [
    BrowserModule,
    FormsModule,     // Added FormsModule
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
