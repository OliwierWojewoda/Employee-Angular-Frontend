import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, Position } from 'src/app/models/get-employee';
import { myResponse } from 'src/app/models/Response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // @Output() employeesUpdated = new EventEmitter<Employee[]>();

  title = 'EmployeeUI';
  // employees:myResponse = new myResponse();
  addEmployeeReq: Employee={
    name :'',
    surName: '',
    birthDate: '',
    phone: '',
    position: Position.Physical 
  }
  constructor(private employeeService: EmployeeService, private router: Router){}
    ngOnInit() : void{}
  // addEmployee(employee:Employee){
  //   this.employeeService.addEmployee(employee)
  //   .subscribe((employees: Employee[]) => 
  //   this.employeesUpdated.emit(employees));
  // }
     addEmployee(employee: Employee){
      this.employeeService.addEmployee(this.addEmployeeReq)
      .subscribe({
        next: (employee) => {
          this.router.navigate(['employeeList']);
        }
      })
     }
}
