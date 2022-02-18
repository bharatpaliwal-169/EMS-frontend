import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/container/employee';
import { EmployeeService } from 'src/app/container/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService,
              private route : ActivatedRoute,
              private router : Router) {}



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
  
  goToList(){
    this.router.navigate(['/list']);
  }

  
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToList()
    })
  }
}
