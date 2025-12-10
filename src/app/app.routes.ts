import { Routes } from '@angular/router';
import { RickListComponent } from './components/rick-list/rick-list.component';
import { RickDetailComponent } from './components/rick-detail/rick-detail.component';
import { SimpsonsListComponent } from './components/simpsons-list/simpsons-list.component';
import { SimpsonsDetailComponent } from './components/simpsons-detail/simpsons-detail.component';
import { DragonListComponent } from './components/dragon-list/dragon-list.component';
import { DragonDetailComponent } from './components/dragon-detail/dragon-detail.component';

export const routes: Routes = [
  { path: 'rick', component: RickListComponent },
  { path: 'rick/:id', component: RickDetailComponent },

  { path: 'simpsons', component: SimpsonsListComponent },
  { path: 'simpsons/:id', component: SimpsonsDetailComponent },

  { path: 'dragon', component: DragonListComponent },
  { path: 'dragon/:id', component: DragonDetailComponent },

  { path: '', redirectTo: 'rick', pathMatch: 'full' }
];
