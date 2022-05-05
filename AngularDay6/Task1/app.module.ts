import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductpriceComponent } from './productprice/productprice.component';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './department-list/department-list.component';
import { Productdemo1Component } from './productdemo1/productdemo1.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { GradepipePipe } from './gradepipe.pipe';
import { EmployeegradeComponent } from './employeegrade/employeegrade.component';
import { EmployeegradefilterComponent } from './employeegradefilter/employeegradefilter.component';
import { SalaryfilterpipePipe } from './salaryfilterpipe.pipe';
import { EmployeesalaryfilterComponent } from './employeesalaryfilter/employeesalaryfilter.component';
// import { EmployeeDIComponent } from './employee-di/employee-di.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { AppFancyCardComponent } from './app-fancy-card/app-fancy-card.component';
import { TodolistComponent } from './todolist/todolist.component';
import { EmployeehttpcomponentComponent } from './employeehttpcomponent/employeehttpcomponent.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeehttpComponent } from './employeehttp/employeehttp.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductdetailComponent,
    FriendsComponent,
    ProductpriceComponent,
    DepartmentListComponent,
    Productdemo1Component,
    EmployeeListComponent,
    FilterOptionsComponent,
    UserinfoComponent,
    GradepipePipe,
    EmployeegradeComponent,
    EmployeegradefilterComponent,
    SalaryfilterpipePipe,
    EmployeesalaryfilterComponent,
    // EmployeeDIComponent,
    SwitchdemoComponent,
    AppFancyCardComponent,
    TodolistComponent,
    EmployeehttpcomponentComponent,
    EmployeehttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
