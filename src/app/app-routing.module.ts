import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachesComponent } from './coaches/coaches.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'coaches', component: CoachesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
