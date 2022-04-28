import { Component, OnChanges, OnInit, SimpleChanges,Input } from '@angular/core';
import { Employee } from '../../models/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input()
  sortValue:string="";

  sorted_emp_list:Employee[] = [];

  emplist:Employee[] = [
    {empId:201 , empName:"Saahil" , empJob:"SDEM" , empSalary:9000 , empDeptno:20},
    {empId:101 , empName:"Dinesh" , empJob:"SDE1" , empSalary:1000 , empDeptno:10},
    {empId:105 , empName:"Rajat" , empJob:"SDE2" , empSalary:2000 , empDeptno:10},
    {empId:209 , empName:"Manjul" , empJob:"SDE3" , empSalary:5000 , empDeptno:10},
    {empId:301 , empName:"Raj" , empJob:"SDET" , empSalary:1000 , empDeptno:30},
    {empId:300 , empName:"Shivangi" , empJob:"SDET" , empSalary:1000 , empDeptno:30},
    {empId:305 , empName:"Umang" , empJob:"SDET" , empSalary:1000 , empDeptno:30}

  ]; 

  constructor() { }
  ngOnChanges(): void {
    if(this.sortValue == "")
    {
      this.sorted_emp_list = this.emplist;

    }
    if(this.sortValue == "1"){
      this.sorted_emp_list = this.emplist.sort((e1,e2) => e1.empId - e2.empId);
    }
    if(this.sortValue == "2"){
      this.sorted_emp_list = this.emplist.sort((e1,e2) => e1.empName > e2.empName ? 1 : -1);
    }
    if(this.sortValue == "3"){
      this.sorted_emp_list = this.emplist.sort((e1,e2) => e1.empJob > e2.empJob ? 1 : -1);
    }
    if(this.sortValue == "4"){
      this.sorted_emp_list = this.emplist.sort((e1,e2) => e1.empSalary - e2.empSalary);
    }
    if(this.sortValue == "5"){
      this.sorted_emp_list = this.emplist.sort((e1,e2) => e1.empDeptno - e2.empDeptno);
    }
    

  }

  ngOnInit(): void 
  {
    
  }

}
