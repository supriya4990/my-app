import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  country = 'Europe';
  location: Location = {
    id: 10,
    name: 'France'
 };
  constructor() { }

  ngOnInit() {
  }

}
