import { Injectable } from '@angular/core';
import { People } from './people';
import { PEOPLE } from './people-list';

@Injectable()
export class PeopleService {
  people: People[];

  constructor() { 
   this.people = PEOPLE;
  }

   getPeople(){
      return this.people;
  }

}
