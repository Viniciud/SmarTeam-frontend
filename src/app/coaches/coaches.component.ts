import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  title = "Coaches";

  public coaches = [
    { name: 'Zig' },
    { name: 'Yuuk' },
    { name: 'SexyCake' },
    { name: 'Nesk' },
    { name: 'bulleT' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
