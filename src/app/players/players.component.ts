import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public title = "Players";

  public playerSelected: string;

  public players = [
    { id: 1, name: 'Zig', mod: 'fps', phone: 71701190  },
    { id: 2, name: 'Yuuk', mod: 'fps', phone: 72701490  },
    { id: 3, name: 'SexyCake', mod: 'fps', phone: 75701280  },
    { id: 4, name: 'Nesk', mod: 'fps', phone: 70751291  },
    { id: 5, name: 'bulleT', mod: 'fps', phone: 70791270  },
  ];

  back() {
    this.playerSelected = '';
  }

  playerSelect(player: any) {
    this.playerSelected = player.name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
