import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { People } from './../people';
import { PeopleService } from './../people.service';

@Component({
  selector: 'app-single-people',
  templateUrl: './single-people.component.html',
  styleUrls: ['./single-people.component.css']
})
export class SinglePeopleComponent implements OnInit {
  people: People;

  constructor
  ( private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.people = this.peopleService.getPerson(+params['id']);
     });
  }
}
