import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any[] = [];

  constructor( private http: HttpClient) {
    console.log('Constructor del Home, hecho ☕');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data: any) => {
      this.paises = data;
      console.log(data);
    });
  }
  ngOnInit(): void {
  }

}
