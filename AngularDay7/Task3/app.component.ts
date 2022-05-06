import { Component } from '@angular/core';
import { Product } from '../models/productdemo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  // sortOption:string = ""; 

  // sortList(value:string){
   
  //   this.sortOption = value;
  // }

  appShadowDirective:string="";

  color1 = "blue";
  color2 = "green";
   

  
}
