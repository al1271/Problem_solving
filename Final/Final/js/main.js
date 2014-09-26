//Alexander Garza 09/26/14 section 00 Final

var item = Number(prompt("What is the cost of the item?"));


while (item == "" || item == 0){
    item = Number(prompt("What is the cost of the item?"));
}
var discount = Number(prompt("What is the percentage of the discount?"));


while(discount < 0 || discount > 100 || discount == ""){
    discount = Number(prompt("What is the percentage of the discount? Must be 0-100 please."));
}

var discouted=function (i,d){
  var price = i * (d/100);
    //took original price and took away the discount
    var final = i - price;
    return final
};
console.log("The price of your item is $" + item + " but after a discount of " + discount + "% your new price is $" + discouted(item,discount));


discouted(item,discount);
