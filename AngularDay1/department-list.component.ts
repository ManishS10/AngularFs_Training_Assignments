import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Department } from 'src/models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  deptno:number=0;
  dname:string="";
  loc:string="";
  isDisabled:boolean=true;

  deptlist:Department[] = [
    {deptno:1,dname:"Marketting",loc:"Pune"},
    {deptno:2,dname:"Admin",loc:"Hyd"},
    {deptno:3,dname:"Finance",loc:"Banglore"},
    {deptno:4,dname:"Operations",loc:"Delhi"},
    {deptno:5,dname:"Logistics",loc:"Noida"}
  ]

  public delete_click(dno:number):void
  {
    var result = confirm("Do you Want to Delete?");
    if(result)
    {
      let index = this.deptlist.findIndex(item=>item.deptno == dno);
      this.deptlist.splice(index,1);
    }
      
  }

  public update_click(dno:number):void
  {

    this.isDisabled = false;
    let index = this.deptlist.findIndex(item=>item.deptno == dno);
    this.deptlist[index].deptno = this.deptno;
    this.deptlist[index].dname = this.dname;
    this.deptlist[index].loc = this.loc;

    this.handleclear();

  }

  public select_click(dno:number):void
  {
    let dtlist:any = this.deptlist.find(item=>item.deptno == dno);
    this.deptno = dtlist.deptno;
    this.dname = dtlist.dname;
    this.loc = dtlist.loc;
  }


  public addDept_click():void
  {
    let dtlist:any = new Department();
    dtlist.deptno = this.deptno;
    dtlist.dname = this.dname;
    dtlist.loc = this.loc;

    this.deptlist.push(dtlist);
    this.handleclear();
  }

  public handleclear():void
  {
    
      this.deptno = 0;
      this.dname="";
      this.loc="";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
