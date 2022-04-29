import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  public startIndex:number=0;
  public endIndex:number=4;

  isDisabled:boolean=false;

  ulist:User[] = 
  [
    {uid:1,ufname:"Mark",ulname:"K",uemail:"xyz@gmail.com",uloc:"Pune"},
    {uid:2,ufname:"Henry",ulname:"DF",uemail:"xyz@gmail.com",uloc:"Hyd"},
    {uid:3,ufname:"Jersey",ulname:"CV",uemail:"xyz@gmail.com",uloc:"Bangalore"},
    {uid:4,ufname:"scott",ulname:"VB",uemail:"xyz@gmail.com",uloc:"Chhenai"},
    {uid:5,ufname:"Joseph",ulname:"LM",uemail:"xyz@gmail.com",uloc:"Rourkela"},
    {uid:6,ufname:"vivek",ulname:"NM",uemail:"xyz@gmail.com",uloc:"Ranchi"},
    {uid:7,ufname:"ashis",ulname:"GH",uemail:"xyz@gmail.com",uloc:"Jaipur"},
    {uid:8,ufname:"subham",ulname:"CV",uemail:"xyz@gmail.com",uloc:"Delhi"},
    {uid:9,ufname:"rajesh",ulname:"AD",uemail:"xyz@gmail.com",uloc:"Noida"},
    {uid:10,ufname:"debashish",ulname:"WE",uemail:"xyz@gmail.com",uloc:"Gurugram"},
    {uid:11,ufname:"satwaki",ulname:"KQ",uemail:"xyz@gmail.com",uloc:"Nagpur"},
    {uid:12,ufname:"christine",ulname:"d",uemail:"xyz@gmail.com",uloc:"Mumbai"},
    {uid:13,ufname:"payal",ulname:"f",uemail:"xyz@gmail.com",uloc:"Kharagpur"},
    {uid:14,ufname:"vidhya",ulname:"G",uemail:"xyz@gmail.com",uloc:"Gwalior"},
    {uid:15,ufname:"shruti",ulname:"J",uemail:"xyz@gmail.com",uloc:"Varanasi"},
    {uid:16,ufname:"alice",ulname:"M",uemail:"xyz@gmail.com",uloc:"Raipur"}

  ]

  load_next()
  {
    if(this.endIndex >= this.ulist.length)
    {
      this.isDisabled = true;
      
    }
    else
    {
      this.startIndex=this.endIndex;
      this.endIndex=this.endIndex + 4;
    }
    

  }
  constructor() { }

  ngOnInit(): void {
  }

}
