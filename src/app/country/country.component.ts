import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/model/country';
import { CountryService } from '../shared/service/country.service';

@Component({
    selector: 'my-country',
    templateUrl: './country.component.html',
    styleUrls: ["./country.component.css"], providers: [CountryService]
})
export class CountryComponent implements OnInit {
    public country: Country = { CountryID: 0, Name: '', Description: '' };
    public countrName: String;
    public _country: Country[] = [];
    public countryDescr: String;
    constructor(private _countrService: CountryService) {
        this.getCountries();
    }
     tiles = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
    public getCountries() {
        this._countrService.getCountries().subscribe(country => {
            this._country = country;
        });
    }

    public addnewCountry() {
        this._countrService.addCountry(this.country).subscribe(ret => {
            alert("New Country Added Successfully!!");
            this.getCountries();
        });
    }

    public deleteCountry(loCounrty: Country) {
        if (confirm("New Country Deleted Successfully!!")) {
            this._countrService.deleteCountry(loCounrty).subscribe(ret => {
                alert("New Country Deleted Successfully!!");
                this.getCountries();
            });
        }
    }

    ngOnInit() {

    }
}