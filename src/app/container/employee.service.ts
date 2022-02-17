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



}
