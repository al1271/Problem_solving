//Alexander Garza 09/15/14 section 0

//determining if I will be able to go home for holiday

var cash = 1000;
var gas = 150;
var food = 100;
var gifts = 300;

var total = gas + food + gifts;
var sTotal = cash - total;

if(sTotal >= 0){
    console.log("You can go with " + sTotal + " Dollars to spare")
}else{
    console.log("You cannot go because you are missing " + sTotal + " Dollars")
}
