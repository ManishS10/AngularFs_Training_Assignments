import { Component, OnInit } from '@angular/core';
import { EmployeedataserviceService } from '../employeedataservice.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-di',
  templateUrl: './employee-di.component.html',
  styleUrls: ['./employee-di.component.css']
})
export class EmployeeDIComponent implements OnInit {

  empsArray:any[]=[];

  public empid:number=0;
  public empname:string="";
  public empjob:string="";
  public empdeptno:number=0;
  public empsalary:string="";

    constructor(private _dataService:EmployeedataserviceService) 
    { 
      
    }

    ngOnInit()
    {
      this.getData_click();
    }

    getData_click()
    {
       this.empsArray = this._dataService.getEmpData();
    }

    addData_click()
    {
      let emp:any= new Object();
        emp.empId = this.empid;
        emp.empName = this.empname;
        emp.empDeptno = this.empdeptno;
        emp.empSalary = this.empsalary;
        emp.empJob = this.empjob;
      
        if(emp.empId!="" && emp.empDeptno!="" && emp.empJob!="" && emp.empName!="" && emp.empSalary!="")
        {
          this._dataService.addEmpData(emp);
        }
        else
        {
          alert("Wrong Input supplied! | Please enter correct values");
        }

        this.cleardata();
      
    }
    deleteData_click(id:number)
    {
      this._dataService.removeEmpData(id);
      this.getData_click();
    }

    cleardata()
    {
      this.empid=0;
      this.empjob="";
      this.empname="";
      this.empsalary="";
      this.empdeptno=0;
    }
  

 

}
