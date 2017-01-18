import { Component } from '@angular/core';
import { People } from './people';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Awesome!';
  peoples: People[];

constructor(private people_service:PeopleService){
  this.peoples = people_service.getPeople();
}
onUpdate(event){
  console.log(event);
}


}
