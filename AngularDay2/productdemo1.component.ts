import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../models/productdemo';

@Component({
  selector: 'app-productdemo1',
  templateUrl: './productdemo1.component.html',
  styleUrls: ['./productdemo1.component.css']
})
export class Productdemo1Component implements OnInit {

@Input()
category:string="";
fpr:Product[]=[];
fpr1:string ="";

prlist:Product[] = [
  {pid:1,pname:"Mobile",price:15000,category:"Electronics"},
  {pid:2,pname:"Washing Machine",price:25000,category:"Electronics"},
  {pid:3,pname:"Sneakers",price:1150,category:"Footwear"},
  {pid:4,pname:"T-Shirt",price:900,category:"Clothing"},
  {pid:5,pname:"Jeans",price:5000,category:"Clothing"},
  {pid:6,pname:"Shirt",price:1200,category:"Clothing"},
  {pid:7,pname:"Laptop",price:89000,category:"Electronics"},
  {pid:8,pname:"Beds",price:7500,category:"Furniture"},
  {pid:9,pname:"Office Tables",price:3500,category:"Furniture"},
]

  constructor() { }

  ngOnInit(): void {
    this.fpr = this.prlist.filter(item=>item.category == this.category);
  }

}
