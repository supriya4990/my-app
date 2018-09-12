import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Location } from '../location';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
// import { LOCATIONS } from '../mock-locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public login_name = 'Supriya Jain';
  country = 'Europe';
  location: Location = {
    id: 10,
    name: 'France'
 };

  public siteurl = window.location.href;

  public successClass = 'text-success';
  public dangerClass = false; //true;
  public hasError = true; //true;
  public dynamicColor = "Grey";

  public multiClass = {
    'text-success': !this.dangerClass,
    'text-danger': this.dangerClass,
    'text-special': true
  }

  public multiStyles = {
    'color': 'blue',
    'fontFamily': 'Arial',
    'fontStyle': 'italic'
  }

  public buttonEvent = '';
  public inputValue = '';
  public twoWayVariable = '';
  public elemExist = true;
  public color = 'red';
  public date = new Date();
  public inputstring = 'My name is supriya Jain';

  public person = [];

  // A vaiable from parent component.
  @Input() public parentData;
  @Output() public childData  = new EventEmitter();

  countries  = [{id: 10, name: 'France'},
                {id: 11, name: 'USA'},
                {id: 12, name: 'Australia'},
                {id: 13, name: 'India'},
                {id: 14, name: 'South Africa'},
                {id: 15, name: 'Germany'},
                {id: 16, name: 'Amsterdam'}];

  public companies = ['BMS', 'ZAK', 'IBM', 'TCS'];

  multiplicationCalculation(var1, var2) {
    return 'The Sum of two numbers is: ' + var1 * var2;
  }

  clickButton() {
    console.log('First button click event');
    this.buttonEvent = 'Button has been clicked';
  }

  displayEventDetails(event) {
    console.log(event);
    this.buttonEvent = event.type;
  }

  getInputValue(refVariable) {
    console.log('This is the input value:' + refVariable.value);
    this.inputValue = refVariable.value;
  }
  onSelect(p) {
    this.router.navigate(['/hotels',p.id]);
  }
  // Http call & observable.
  constructor(private _locationService: LocationService, private router: Router) { }

  ngOnInit() {
     this._locationService.getLocations()
       .subscribe(data => this.person = data)
    ;
  }

}
