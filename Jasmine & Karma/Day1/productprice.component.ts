import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productprice',
  templateUrl: './productprice.component.html',
  styleUrls: ['./productprice.component.css']
})
export class ProductpriceComponent implements OnInit {

  productName:string="Mango";
  unitPrice:number=100;
  quantity:number=1;

  total:number=0;
  result:string="";


  public btn_click():void{

    if(this.productName!="" && this.quantity>0 && this.unitPrice>0)
    {
      this.total=this.quantity*this.unitPrice;
      //this.getColor();
      this.result = this.total.toString();
    }
    else
    {
      this.result = `NaN`;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
