import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeegrade',
  templateUrl: './employeegrade.component.html',
  styleUrls: ['./employeegrade.component.css']
})
export class EmployeegradeComponent {

  emplist:any[]=[

    {EmpName:"Javed",EmpGrade:1},

    {EmpName:"Hansraj",EmpGrade:2},

    {EmpName:"Vivek",EmpGrade:4},

    {EmpName:"Alice",EmpGrade:3},

    {EmpName:"Kevin",EmpGrade:1},

    {EmpName:"Manish",EmpGrade:4},

 

  ];

}
