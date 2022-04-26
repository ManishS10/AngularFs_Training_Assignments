class Product
{
    private productId:number;
    private productName:string;
    private unitprice:number;
    private quantity:number;

    public get ProductId()
    {
        return this.productId;
    }

    public get ProductName()
    {
        return this.productName;
    }
    public set ProductName(value:string)
    {
        this.productName = value;
    }

    public get UnitPrice()
    {
        return this.unitprice;
    }
    public set UnitPrice(value:number)
    {
        this.unitprice = value;
    }

    public get Quantity()
    {
        return this.quantity;
    }
    public set Quantity(value:number)
    {
        this.quantity = value;
    }



    constructor(productid:number=0)
    {
        this.productId = productid;
    }

}

let p1:Product = new Product(1);
//p1.ProductId=5;
p1.ProductName = "Cloth";
p1.Quantity = 1;
p1.UnitPrice =4;
console.log(p1);
