import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  public title = "Coaches";

  public coaches = [
    { id: 1, name: 'Sense', teamGame: 'Raibow Six Siege' },
    { id: 2, name: 'Yoda', teamGame: 'League of Legends' },
    { id: 3, name: 'fallen', teamGame: 'Counter Strike: GO' },
    { id: 4, name: 'lins', teamGame: 'DOTA 2' },
    { id: 5, name: 'sanss', teamGame: 'Valorant' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
