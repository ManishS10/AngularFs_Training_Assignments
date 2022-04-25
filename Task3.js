var Discount;
(function (Discount) {
    Discount[Discount["new15"] = 15] = "new15";
    Discount[Discount["weekend25"] = 25] = "weekend25";
})(Discount || (Discount = {}));
;
var DeliveryMode;
(function (DeliveryMode) {
    DeliveryMode[DeliveryMode["store"] = 0] = "store";
    DeliveryMode[DeliveryMode["homedelivery"] = 30] = "homedelivery";
})(DeliveryMode || (DeliveryMode = {}));
;
function calculateamount(item, price, quantity, discount, deliverymode) {
    var dm, total, FinalPrice;
    if (typeof (deliverymode) == typeof ("")) {
        dm = Number(DeliveryMode[deliverymode]);
    }
    if (typeof (discount) == typeof ("")) {
        discount = Number(Discount[discount]);
    }
    total = price * quantity;
    FinalPrice = ((total) - ((discount / 100) * total) + dm);
    console.log("The item is :".concat(item, ", price :").concat(price, ", quantity:").concat(quantity, " | discount:").concat(discount, " | DeliveryMode:").concat(deliverymode, " |\n Final Bill after Discount:").concat(FinalPrice));
}
calculateamount("Onions", 30, 2, 10, "store");
calculateamount("Mango", 100, 2, "weekend25", "homedelivery");
calculateamount("Lemon", 20, 2, "new15", "store");
