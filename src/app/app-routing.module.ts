import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttractionsComponent } from './attractions/attractions.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: HotelsComponent},
  // { path: '', redirectTo: '/hotels', pathMatch: 'prefix'},//Just check the prefix & that will be always '', So it will redirect to hotels
  { path: '', redirectTo: '/hotels', pathMatch: 'full'},
  { path: 'hotels', component: HotelsComponent},
  { path: 'hotels/:id', component: HotelDetailsComponent},
  { path: 'attractions' , component: AttractionsComponent},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HotelsComponent, AttractionsComponent, PageNotFoundComponent, HotelDetailsComponent];
