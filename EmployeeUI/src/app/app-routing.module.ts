import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
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
  },
  {
    path: 'addEmployee',
    component:AddEmployeeComponent
  },
  {
    path: 'editEmployee/:id',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
