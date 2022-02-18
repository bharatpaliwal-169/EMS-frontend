import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: "list",component: EmployeeListComponent 
  },
  {
    path: "" , redirectTo : "list", pathMatch: "full"
  },
  {
    path: "create" ,component : CreateEmployeeComponent
  },
  {
    path: "update/:id", component : UpdateEmployeeComponent
  },
  {
    path: "details/:id" , component : DetailEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
