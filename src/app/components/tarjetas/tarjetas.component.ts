import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {

  @Input() items: any [] = [];
  constructor( private router: Router ) { }

  verArtist( item: any ): any {
    let artistId;
    if ( item.type === 'artist'){
        artistId = item.id;
    }else {
        artistId = item.artists[0].id;
    }
    console.log(artistId);
    this.router.navigate([ '/artist', artistId ]);
  }
}
