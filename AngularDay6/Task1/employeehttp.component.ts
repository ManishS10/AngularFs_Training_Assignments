import { Component, OnInit } from '@angular/core';
import { EmployeedataserviceService } from '../employeedataservice.service';

@Component({
  selector: 'app-employeehttp',
  templateUrl: './employeehttp.component.html',
  styleUrls: ['./employeehttp.component.css']
})
export class EmployeehttpComponent implements OnInit
 {

    empName:string  = "";
    empJob:string  = "";
    empSalary:number  = 0;
    empDeptno:number = 0;
    empId:number = 0;

    employeeArray:any[] = [];
  
    constructor(private dataService:EmployeedataserviceService) { }
  
    ngOnInit(): void {
     // this.getData_click();
    }
  
    getData_click()
    {
        this.dataService.getAllEmployee().subscribe( (resData:any) =>
        {
          console.log(resData);
          this.employeeArray = resData;
        });
    }
  
    addData_click() {
      let empObj:any = {};
      empObj.empId = 0;
      empObj.empName = this.empName;
      empObj.empJob = this.empJob;
      empObj.empDeptno = this.empDeptno;
      empObj.empSalary = this.empSalary;
  
      console.log(empObj);
  
      this.dataService.addEmployee(empObj).subscribe( (resData:any) =>
      {
        alert("New Employee details are added to database");
        this.getData_click();
      });
    }
  
    updateData_click() {
      let empObj:any = {};
      empObj.empId = this.empId;
      empObj.empName = this.empName;
      empObj.empJob = this.empJob;
      empObj.empDeptno = this.empDeptno;
      empObj.empSalary = this.empSalary;
  
      console.log(empObj);
  
      this.dataService.updateEmployee(empObj).subscribe( (resData:any) =>
      {
         alert("Employee details are update to database");
        this.getData_click();
      });
    }
  
    deleteData_click(eid:number) {
  
      this.dataService.deleteEmployee(eid).subscribe( (resData:any) =>
      {
        alert("Employee details are deleted from database");
        this.getData_click();
      });
  
    }
  
    selectData_click(eid:number) {
  
      this.empId = eid;
      
      this.dataService.getEmployeeById(eid).subscribe( (resData:any) =>
      {
        this.empName = resData.empName;
        this.empJob = resData.empJob;
        this.empDeptno = resData.empDeptno;
        this.empSalary = resData.empSalary;
      });
    }
    clearFields() {
      this.empName = "";
      this.empJob = "";
      this.empDeptno = 0;
      this.empSalary = 0;
    }
  }


