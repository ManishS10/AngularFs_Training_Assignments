import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataserviceService {


    baseUrl:string  = "http://localhost:8000/employees/";

    constructor(private httpObj:HttpClient) { }

  // Read All
  public getAllEmployee(): Observable<any>
  {   
    return this.httpObj.get(this.baseUrl);
  }

    // Read Single
    public getEmployeeById(empId:number):any
    {
      return this.httpObj.get(this.baseUrl + empId);
    }
  
    // Create
    public addEmployee(empObj:any):any
    {
      return this.httpObj.post(this.baseUrl, empObj);
    }
  
    // Update
    public updateEmployee(empObj:any):any
    {
      return this.httpObj.put(this.baseUrl + empObj.empId, empObj);
      // return this.httpObj.put(this.baseUrl, stObj);
    }
  
  
    // Delete
    public deleteEmployee(empId:number):any
    {
      return this.httpObj.delete(this.baseUrl + empId);
    }
  
}
