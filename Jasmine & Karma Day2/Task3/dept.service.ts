import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor() { }

  deptsList:any[] = [
    {deptno : 1, dname : "Finance",  loc :  "Bangalore"} ,
    {deptno : 2, dname : "Billing",  loc :  "Pune"},
    {deptno : 3, dname : "IT",  loc :  "Mumbai"}
  ];

  public addDept(deptObj:any){
    this.deptsList.push(deptObj);
   
  }

  public removeDept(value:number){

    let index = this.deptsList.findIndex(item => item.deptno ===value);
    this.deptsList.splice(index, 1);
    return this.deptsList.length;
  }
}
