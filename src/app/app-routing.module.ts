import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { SinglePeopleComponent } from './single-people/single-people.component';

const routes: Routes = [
 { path: '', redirectTo: '/people', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'people',  component: PeopleComponent },
 { path: 'single/:id', component: SinglePeopleComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
