import { Injectable } from '@angular/core';
import { Employee } from '../models/get-employee';
import { formatDate } from '@angular/common';
import { Position } from '../models/get-employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { myResponse } from '../models/Response';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private url ="Employee"
  constructor(private http: HttpClient) { }

  public getEmployeeById(id:string) : Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiUrl}/${this.url}/GetBy${id}`);
  }

  public getEmployees() : Observable<myResponse> {
    return this.http.get<myResponse>(`${environment.apiUrl}/${this.url}/GetAll`);
  }
  public updateEmployee(employee:Employee) : Observable<Employee[]> {
    return this.http.put<Employee[]>(`${environment.apiUrl}/${this.url}/${employee.id}`, 
    employee);
  }
  public deleteEmployee(id: string ) : Observable<Employee[]> {
    return this.http.delete<Employee[]>(`${environment.apiUrl}/${this.url}/${id}`);
  }
  public addEmployee(employee:Employee) : Observable<Employee[]> {
    return this.http.post<Employee[]>(`${environment.apiUrl}/${this.url}`
    , employee);
  }
  public getBirthdays() : Observable<myResponse> {
    return this.http.get<myResponse>(`${environment.apiUrl}/${this.url}/GetBirthdays`);
  }
}
