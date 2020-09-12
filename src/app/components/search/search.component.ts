import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {}

  search( termino: string): any {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtists(termino)
    .subscribe( (data: any) => {
     // console.log(data.artists.items);
      this.artists = data;
      console.log(data);
      this.loading = false;
    });
  }


}
