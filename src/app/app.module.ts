import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { AllCountriesComponent } from './allcountries/allcountries.component';
import { RestcountriesService } from './restcountries.service';
import { CountryComponent } from './country/country.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path:'regions',component:RegionsComponent},
  {path:'',redirectTo: 'regions', pathMatch:'full'},
  {path:'countries/:region', component:AllCountriesComponent},
  {path:'acountry/:country', component:CountryComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    AllCountriesComponent,
    CountryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgxPaginationModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [RestcountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
