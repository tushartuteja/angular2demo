import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { People } from './../people';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

@Input() people: People;
@Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
