import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachesComponent } from './coaches/coaches.component';
import { PlayersComponent } from './players/players.component';


const routes: Routes = [
  { path: 'coaches', component: CoachesComponent },
  { path: 'players', component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
