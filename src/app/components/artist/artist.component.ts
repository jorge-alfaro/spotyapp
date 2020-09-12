import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any [] = [];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService ) {
    this.router.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.getArtist(params['id']);

      // tslint:disable-next-line: no-string-literal
      this.getTopTracks(params['id']);
    });
   }

   getArtist(id: string): any {
     this.loadingArtist = true;
     this.spotify.getArtist(id)
        .subscribe( artist => {
          console.log(artist);
          this.artist = artist;
          this.loadingArtist = false;
        });
   }

   getTopTracks( id: string ): any {
    this.spotify.getTopTracks(id)
        .subscribe (topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
   }

}
