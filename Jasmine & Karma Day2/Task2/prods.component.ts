import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {

  }



  productArr:any[] = [
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

public  onremoveproduct(pid: number)
	{
		 var index =  this.productArr.findIndex((x:any) => x.pid == pid);
		 this.productArr.splice(index, 1);
	}
}
