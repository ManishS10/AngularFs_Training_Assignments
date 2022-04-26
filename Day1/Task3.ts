enum Discount
{
    new15 = 15,
    weekend25 =25
};

enum DeliveryMode
{
    store = 0,
    homedelivery = 30
};

function calculateamount(item:string,price:number,quantity:number,discount:any,deliverymode:string):void
{
    var dm:number,total:number,FinalPrice:number;

    if(typeof(deliverymode) == typeof(""))
    {
    dm = Number(DeliveryMode[deliverymode]);
    }

    if(typeof(discount) == typeof(""))
    {
        discount = Number(Discount[discount]);
    }

    total=price*quantity;
    FinalPrice = ((total)-((discount/100)* total)+dm);
    console.log(`The item is :${item}, price :${price}, quantity:${quantity} | discount:${discount} | DeliveryMode:${deliverymode} |\n Final Bill after Discount:${FinalPrice}`);


}

calculateamount("Onions",30,2,10,"store");
calculateamount("Mango",100,2,"weekend25","homedelivery");
calculateamount("Lemon",20,2,"new15","store");