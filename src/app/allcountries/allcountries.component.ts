import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../restcountries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public countries;
  public region;

  constructor(public serviceObj:RestcountriesService, private _route: ActivatedRoute, public loc: Location) { }

  ngOnInit() {
    this._route.queryParams
      .subscribe(
        params => {
          if (params["currency"]) {
            this.getCountriesByCurrency(params["currency"])
          } 
          else if(params["language"]){
            this.getCountriesByLanguage(params["language"])
          }
          else {
            let rCountry = this._route.snapshot.paramMap.get('region');
            this.getCountriesByRegion(rCountry);
          }
        }
      )}

  getCountriesByRegion(region){
    this.serviceObj.getCountries(region)
      .subscribe(
        data => {
          this.countries = data
        }
      )
  }

  getCountriesByCurrency(code){
    this.serviceObj.getCountriesByCurrency(code)
      .subscribe(
        data => {
          this.countries = data
        }
      )
  }

  getCountriesByLanguage(code){
    this.serviceObj.getCountriesByLanguage(code)
      .subscribe(
        data => {
          this.countries = data
        }
      )
  }

  public goBack(): any{
    this.loc.back();
  } 

}
