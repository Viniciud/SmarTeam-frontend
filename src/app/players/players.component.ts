import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public title = "Players";

  public players = [
    { id: 1, name: 'Zig', mod: 'fps', phone: 7170-1190  },
    { id: 2, name: 'Yuuk', mod: 'fps', phone: 7270-1490  },
    { id: 3, name: 'SexyCake', mod: 'fps', phone: 7570-1280  },
    { id: 4, name: 'Nesk', mod: 'fps', phone: 7075-1291  },
    { id: 5, name: 'bulleT', mod: 'fps', phone: 7079-1270  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
