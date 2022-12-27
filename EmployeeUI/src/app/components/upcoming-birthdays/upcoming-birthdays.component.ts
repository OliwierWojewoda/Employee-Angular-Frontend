import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/get-employee';
import { myResponse } from 'src/app/models/Response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrls: ['./upcoming-birthdays.component.css']
})
export class UpcomingBirthdaysComponent implements OnInit {

  employees:myResponse = new myResponse();
  constructor(private employeeservice: EmployeeService){}
    ngOnInit() : void{
      this.employeeservice.getBirthdays().subscribe
      ((result: myResponse) => (this.employees = result));
    }
}
