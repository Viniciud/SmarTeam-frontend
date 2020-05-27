import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  public title = "Coaches";

  public coaches = [
    { id: 1, name: 'Sense', game: 'Raibow Six Siege', phone: 34342344 },
    { id: 2, name: 'Yoda', game: 'League of Legends', phone: 36542344 },
    { id: 3, name: 'fallen', game: 'Counter Strike: GO', phone: 34742344 },
    { id: 4, name: 'lins', game: 'DOTA 2', phone: 32542345 },
    { id: 5, name: 'sanss', game: 'Valorant', phone: 39549344 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
