import { Component, OnInit } from '@angular/core';
import { People } from './../people';
import { PeopleService } from './../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  title = 'This is Awesome!';
  peoples: People[];

 constructor(private people_service:PeopleService){
  this.peoples = people_service.getPeople();
}
onUpdate(event){
  console.log(event);
}

}
