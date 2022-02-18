import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseURL = "http://localhost:8008/api";
  constructor(private httpClient : HttpClient){
    //injecting client dependency
  }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/viewall`);
  }

  addEmployee(employee: Employee) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/create`,employee)
  }

  getEmployeeById(id:number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/${id}`)
  }

  updateEmployee(id:number , employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`,employee);
  }

  deleteEmployee(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
