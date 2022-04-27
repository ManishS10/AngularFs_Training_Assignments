import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productprice',
  templateUrl: './productprice.component.html',
  styleUrls: ['./productprice.component.css']
})
export class ProductpriceComponent implements OnInit {

  productName:string="";
  unitPrice:number=0;
  quantity:number=0;

  total:number=0;
  result:string="";


  public btn_click():void{

    if(this.productName!="" && this.quantity>0 && this.unitPrice>0)
    {
      this.total=this.quantity*this.unitPrice;
      //this.getColor();
      this.result = `Total Amount: Rs${this.total}`
    }
  }

  public getColor():string
  {
    if(this.total > 10000)
    {return 'red';}
    return 'blue';
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
