import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  title = "Players";

  public players = [
    { name: 'Zig' },
    { name: 'Yuuk' },
    { name: 'SexyCake' },
    { name: 'Nesk' },
    { name: 'bulleT' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
