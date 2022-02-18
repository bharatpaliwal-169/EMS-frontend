import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

import { FormsModule } from "@angular/forms";
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmployeeListComponent,
    NavbarComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
