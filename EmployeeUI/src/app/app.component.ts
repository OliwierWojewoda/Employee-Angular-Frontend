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
  constructor(private employeeservice: EmployeeService){}
    ngOnInit() : void{
      this.employeeservice.getEmployees().subscribe
      ((result: myResponse) => (this.employees = result));
    }
}
