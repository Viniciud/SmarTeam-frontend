import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public playerForm: FormGroup;
  public title = "Players";
  public playerSelected: Player;
  public simpleText: string;

  public players = [
    { id: 1, name: 'Zig', modality: 'fps', phone: 71701190  },
    { id: 2, name: 'Yuuk', modality: 'fps', phone: 72701490  },
    { id: 3, name: 'SexyCake', modality: 'fps', phone: 75701280  },
    { id: 4, name: 'Nesk', modality: 'fps', phone: 70751291  },
    { id: 5, name: 'bulleT', modality: 'fps', phone: 70791270  },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
    this.playerForm = this.fb.group({
      name: ['', Validators],
      modality: [''],
      phone: [''],
    });
  }

  playerSubmit() {
    console.log(this.playerForm.value);
  }

  back() {
    this.playerSelected = null;
  }

  playerSelect(player: Player) {
    this.playerSelected = player;
    this.playerForm.patchValue(player);
  }

}
