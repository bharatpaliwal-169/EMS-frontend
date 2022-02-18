import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/container/employee.service';
import {Employee} from '../../container/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList!: Employee[];
  constructor(private employeeService : EmployeeService, 
              private router : Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employeeList = data;
    });
    
  }

  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  detailEmployee(id:number){
    this.router.navigate(['details',id])
  }
}
