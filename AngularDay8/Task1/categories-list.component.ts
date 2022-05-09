import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  catObj:any = {};

  catlistArray:any[] = [
    {name:"Sneakers",type:"Footwear"},
    {name:"Espadrills",type:"Footwear"},
    {name:"TV",type:"Electronics"},
    {name:"Mobile",type:"Electronics"},
    {name:"Laptop",type:"Electronics"},
    {name:"Tomato",type:"Groceries"},
    {name:"Potato",type:"Groceries"},
    {name:"Brinjal",type:"Groceries"},
    {name:"Curry Leaves",type:"Groceries"},
    {name:"Cricket",type:"Sports"},
    {name:"Batminton",type:"Sports"},
    {name:"Dining Table",type:"Furniture"},
    {name:"Sofa",type:"Furniture"},
    
  ];
  constructor(private  route:ActivatedRoute){ }

  ngOnInit(): void {

    let selectedtype  =this.route.snapshot.params["type"];
    alert(selectedtype);
    this.catObj = this.catlistArray.filter(item => item.type == selectedtype );
  }

  

}
