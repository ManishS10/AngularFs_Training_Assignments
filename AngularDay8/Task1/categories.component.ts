import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  catArray:any[] = [

    {categoryId:1,type:'Electronics'},
    {categoryId:2,type:'Footwear'},
    {categoryId:3,type:'Groceries'},
    {categoryId:4,type:'Furniture'},
    {categoryId:5,type:'Sports'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  // onclick()
  // {
  //   this.router.navigateByUrl('/Categories/type');
  // }

}
