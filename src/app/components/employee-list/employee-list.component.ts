import { Component, OnInit } from '@angular/core'
import { EmployeeService } from 'src/app/container/employee.service';
import {Employee} from '../../container/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList!: Employee[];
  constructor(private employeeService : EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employeeList = data;
    });
    
  }
}
