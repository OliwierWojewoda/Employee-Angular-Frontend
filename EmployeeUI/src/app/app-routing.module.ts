import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list/employee-list.component';
import { UpcomingBirthdaysComponent } from './components/upcoming-birthdays/upcoming-birthdays.component';

const routes: Routes = [
  {
    path: '',
    component:EmployeeListComponent
  },
  {
    path: 'birthdays',
    component:UpcomingBirthdaysComponent
  },
  {
    path: 'employeeList',
    component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
