import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Works ✔');
   }

   getNewReleases(): any {

    const headers = new HttpHeaders({
    Authorization: 'Bearer BQAhcbZmT_lyLOfeH3eWUoLS3XDmvyZBqFeCbFVrdGSlWzkDVfLGsBjwJx7_nJEkVsN_6DZc2KtMKi6Nt2k'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist( termino: string): any {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAhcbZmT_lyLOfeH3eWUoLS3XDmvyZBqFeCbFVrdGSlWzkDVfLGsBjwJx7_nJEkVsN_6DZc2KtMKi6Nt2k'
      });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
   }
}
