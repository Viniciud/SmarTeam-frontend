import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ProfileComponent } from './profile/profile.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
   declarations: [
      AppComponent,
      PlayersComponent,
      CoachesComponent,
      ProfileComponent,
      DashBoardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
