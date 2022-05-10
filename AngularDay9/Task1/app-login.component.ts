import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  password:string="";
  username:string="";

  constructor() { }

  ngOnInit(): void {
  }

  button_clicked()
  {
    if(this.username!= null && this.password!= null)
    {
      console.log(this.username,this.password);
      if(this.username.toUpperCase() == "ADMIN" && this.password == "1234")
      {
        alert("Login Sucessful");

      }
      else
      {
        alert("Invalid Credentials!. Please Login Again");
      }
    }
    else
    {
      alert("Please enter Credentials and click on Submit");
    }
    
  }
}
