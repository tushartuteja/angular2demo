import { Injectable } from '@angular/core';
import { People } from './people';
import { PEOPLE } from './people-list';

@Injectable()
export class PeopleService {
  people: People[];
  i: Number;
  constructor() { 
   this.people = PEOPLE;
  }

   getPeople(){
      return this.people;
  }

  getPerson(id){
   for (this.i= 0; this.i < this.people.length; ){

      if (id == this.people[+this.i].id){
        return this.people[+this.i];
      }
      this.i = +this.i + 1;
   }

   return null;
  }

}
