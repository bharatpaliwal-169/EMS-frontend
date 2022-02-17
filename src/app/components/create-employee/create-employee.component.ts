import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/container/employee';
import { EmployeeService } from 'src/app/container/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToList();
    })
  }

  goToList(){
    this.router.navigate(['/list']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }
}
