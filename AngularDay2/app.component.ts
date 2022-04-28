import { Component } from '@angular/core';
import { Product } from '../models/productdemo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

   cat1:string ="Footwear";
   cat2:string ="Electronics";
   cat3:string ="Clothing";
   cat4:string ="Furniture";

  
}
