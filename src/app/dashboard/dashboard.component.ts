import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../people.service';
import { People } from './../people';
@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  peoples: People[];

  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
      this.peoples = this.peopleService.getPeople();

  }

}
