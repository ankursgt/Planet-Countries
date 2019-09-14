import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestcountriesService } from '../restcountries.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country;
  public countryInfo: any;

  constructor(public router: Router,public _route: ActivatedRoute, public serviceObj:RestcountriesService, public loc:Location) { }

  ngOnInit() {
    this._route.params.subscribe(
      data => {
        this.country = data.country;
        this.serviceObj.getCountryInfo(this.country).subscribe(
          data => {
            this.countryInfo = data
          }
        )
      }
    )
  }

  getCountryByCode(borderCountry){
    this.serviceObj.getCountryInfoByCode(borderCountry).subscribe(
      (data: any) => {
        this.router.navigate(['/acountry', data.name])
      }
    )
  }

  public goBack(): any{
    this.loc.back();
  } 
}
