import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-employeesalaryfilter',
  templateUrl: './employeesalaryfilter.component.html',
  styleUrls: ['./employeesalaryfilter.component.css']
})
export class EmployeesalaryfilterComponent 
{

  key:string="";
  value1:string="";
  value2:string="";

  filterkey:string="empSalary";
  filtervalue1:string="";
  filtervalue2:string="";

  emplist:Employee[] = [
    {empId:201 , empName:"Saahil" , empJob:"SDEM" , empSalary:9000 , empDeptno:20},
    {empId:101 , empName:"Dinesh" , empJob:"SDE1" , empSalary:1000 , empDeptno:10},
    {empId:105 , empName:"Rajat" , empJob:"SDE2" , empSalary:2000 , empDeptno:10},
    {empId:209 , empName:"Manjul" , empJob:"SDE3" , empSalary:5000 , empDeptno:10},
    {empId:301 , empName:"Raj" , empJob:"SDET" , empSalary:1000 , empDeptno:30},
    {empId:300 , empName:"Shivangi" , empJob:"SDET" , empSalary:1000 , empDeptno:30},
    {empId:305 , empName:"Umang" , empJob:"SDET" , empSalary:1000 , empDeptno:30}

  ]; 

  filterdata_click()
  {
    this.key= this.filterkey;
    this.value1=this.filtervalue1;
    this.value2=this.filtervalue2;
  }



  

}
