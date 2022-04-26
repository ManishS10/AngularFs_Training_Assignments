class Customer
{
    public custId:number=0;
    public place:string;
    public name:string = "";

    constructor (custid:number=0,name:string= "",place:string = "")
    {
        this.custId = custid;
        this.name = name;
        this.place = place;
    }

    public showDetails():void
    {
        console.log(`Customer Name:${this.name} | Customer Id:${this.custId} | Location:${this.place}`);
    }
}

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256,"Scott");
let c4:Customer = new Customer(10256,"Scott","Hyd");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
