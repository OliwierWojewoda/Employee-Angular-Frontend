import { Component, OnInit } from '@angular/core';
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
  constructor(private employeeservice: EmployeeService){}
    ngOnInit() : void{
      this.employeeservice.getEmployees().subscribe
      ((result: myResponse) => (this.employees = result));
    }
  updateEmployeeList(employees: Employee[]){
    this.employees.data=employees;
  }
  initNewEmployee(){
    this.employeeToEdit = new Employee();
  }
  editEmployee(employee: Employee){
    this.employeeToEdit = employee;
  }
 
}
