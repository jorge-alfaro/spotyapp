import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Works ✔');
   }


   getQuery(query: string): any {

    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCzuIpi1nr3BmvoTzssZa5ITZZdMErqjKosNi6fYwucCy__csC4tpYDKdsDuFTmUM23sSc0JJCeBWz2kRk'
      });
    return this.http.get(URL, { headers });
   }

   getNewReleases(): any {

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( (data: any ) => data.albums.items));
   }

   getArtists( termino: string): any {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              // tslint:disable-next-line: no-string-literal
               .pipe( map( (data: any) => data['artists'].items));
   }


   getArtist( id: string): any {

    return this.getQuery(`artists/${ id }`);
              // tslint:disable-next-line: no-string-literal
              // .pipe( map( (data: any) => data['artists'].items));
   }

   getTopTracks( id: string): any {

    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
              // tslint:disable-next-line: no-string-literal
               .pipe( map( (data: any) => data['tracks']));
   }
}
