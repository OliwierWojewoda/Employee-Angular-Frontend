import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/get-employee';
import { myResponse } from 'src/app/models/Response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  title = 'EmployeeUI';
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
 
}
