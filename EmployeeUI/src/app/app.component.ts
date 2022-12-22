import { Component } from '@angular/core';
import { Employee } from './models/get-employee';
import { EmployeeService } from './services/employee.service';
import { myResponse } from './models/Response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  editEmployee(employee: Employee){
    this.employeeToEdit = employee;
  }
 
}
