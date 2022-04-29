import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeedataserviceService {

  public empData:any[] = [
    {empId:6589,empName:"SRIRAM",empJob:"MANAGER",empSalary:3200,empDeptno:30},
    {empId:6369,empName:"SMITH",empJob:"CLERK",empSalary:800,empDeptno:20},
    {empId:6499,empName:"ALLEN",empJob:"SALESMAN",empSalary:1600,empDeptno:30},
    {empId:6521,empName:"WARD",empJob:"ANALYST",empSalary:1250,empDeptno:30},
    {empId:6566,empName:"JONES",empJob:"MANAGER",empSalary:2975,empDeptno:20},
    {empId:7654,empName:"MARTIN",empJob:"SALESMAN",empSalary:1250,empDeptno:30},
    {empId:7698,empName:"BLAKE",empJob:"MANAGER",empSalary:2850,empDeptno:30},
    {empId:7782,empName:"CLARK",empJob:"MANAGER",empSalary:2450,empDeptno:10}
    ];

  public getEmpData():any[]
  {
    return this.empData;
  }

  public addEmpData(emp:any[])
  {
    
      this.empData.push(emp);
  }
  public removeEmpData(id:number)
  {
    var result = confirm("Do you Want to Delete?");
    if(result)
    {
    this.empData.splice(this.empData.findIndex(item=>item.empId == id),1);
    }
  }
  
}
