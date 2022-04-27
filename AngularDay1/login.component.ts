import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

public empId:number = 12345;
public name:string ="Stephen";
public job:string ="Manager";
public salary:number = 75000;
public deptno:number = 10;

}
