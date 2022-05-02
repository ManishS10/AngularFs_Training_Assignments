import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent
{

prList:any[] = 

[
  {pid:1,pname:"Tshirt",price:400,image:"assets\\TShirt.png"},
  {pid:2,pname:"Sneakers",price:5000,image:"assets\\sneaker.png"},
  {pid:3,pname:"Tie",price:135,image:"assets\\tie.png"},
  {pid:4,pname:"Notebooks",price:40,image:"assets\\notebook.png"},
  {pid:5,pname:"Pen",price:10,image:"assets\\pen.jpg"}
]

displayMode:string="";

public Image_Click(value:string)
{
  this.displayMode = value;
}







}
