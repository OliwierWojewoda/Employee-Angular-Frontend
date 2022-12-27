import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Position } from 'src/app/models/get-employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee?: Employee;
  @Output() employeesUpdated = new EventEmitter<Employee[]>();
  employeeDetails: Employee ={
    name :'tescik',
    surName: 'hfhf',
    birthDate: '',
    phone: '5345',
    position: Position.Physical 
  };
  constructor(private route: ActivatedRoute,private service:EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if(id) {
          this.service.getEmployeeById(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }
      }
    })
  }
  
  updateEmployee(){
    this.service.updateEmployee(this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employeeList']);
      }
    });
  }
  deleteEmployee(id: number){
    this.service.deleteEmployee(id.toString())
    .subscribe({
      next: (response) => 
      {
        this.router.navigate(['employeeList']);
      }
    })
  }
}
