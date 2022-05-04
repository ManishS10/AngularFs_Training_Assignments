import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employeehttpcomponent',
  templateUrl: './employeehttpcomponent.component.html',
  styleUrls: ['./employeehttpcomponent.component.css']
})
export class EmployeehttpcomponentComponent implements OnInit {

 

  ngOnInit(): void {
  }

  
  constructor(private httpObj: HttpClient) { }

  userArray:any[]=[];

  getusers()
  {
    
    let url="https://reqres.in/api/users/";
    this.httpObj.get(url).subscribe((resdata:any)=>
    {
      this.userArray=resdata.data;
      
    });

  }

}
