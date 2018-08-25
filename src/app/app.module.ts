// The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project. This is where you opt-in
// to the FormsModule.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // Added formsModule So AppModule can support Forms Input ngModel

import { AppComponent } from './app.component';
// This Component got added when we run ng generate component cmd.
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent   // This Component got added when we run ng generate component cmd.
  ],
  imports: [
    BrowserModule,
    FormsModule    // Added FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
