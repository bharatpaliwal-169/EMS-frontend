import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: "list",component: EmployeeListComponent 
  },
  {
    path: "" , redirectTo : "list", pathMatch: "full"
  },
  {
    path: "create" ,component : CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
