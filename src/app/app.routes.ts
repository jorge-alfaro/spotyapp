import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PaisesComponent } from './components/paises/paises.component';
import { ArtistComponent } from './components/artist/artist.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'paises', component: PaisesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
