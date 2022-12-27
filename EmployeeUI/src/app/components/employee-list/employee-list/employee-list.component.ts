import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { concatWith, Observable } from 'rxjs';
import { Employee } from 'src/app/models/get-employee';
import { myResponse } from 'src/app/models/Response';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:myResponse = new myResponse();
  employeeToEdit?: Employee;
  enteredSearchValue: string = '';
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()
  constructor(private employeeservice: EmployeeService){}
    ngOnInit() : void{
      this.employeeservice.getEmployees().subscribe
      ((result: myResponse) => (this.employees = result));
    }
  sortSurname(){
    this.employeeservice.getSortedBySurname().subscribe
    ((result: myResponse) => (this.employees = result));
  }
  sortBirthDate(){
    this.employeeservice.getSortedByBirthDate().subscribe
    ((result: myResponse) => (this.employees = result));
    console.log("eloo")
  }
  onSearchTextChanged(){
    if(this.enteredSearchValue.length!=0)
    {
    this.employeeservice.getSearched(this.enteredSearchValue).subscribe
      ((result: myResponse) => (this.employees = result));
    }
    else{
      this.ngOnInit();
    }
  }

}
