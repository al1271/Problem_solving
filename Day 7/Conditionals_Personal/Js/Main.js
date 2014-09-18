//Alexander Garza 09/15/14 section 0

//determining if I will be able to go home for holiday

var cash = Number(prompt("How much cash do you have"));
var gas = Number(prompt("How much are you going to spend on gas"));
var food = Number(prompt("How much are you going to spend on food"));
var gifts = Number(prompt("how much are you going to spend on gifts"));

//checking if user has set an amount for cash
while(cash == ""){
    console.log("You did not enter an amount for cash");
    cash = Number(prompt("Please enter how much cash you have."));
}
//checking if user has set an amount for gas
while(gas == ""){
    console.log("You did not enter an amount for gas");
    gas = Number(prompt("Please enter how much you're going to spend on gas"));
}
//checking if user has set an amount for food
while(food == ""){
    console.log("You did not enter an amount for food");
    food = Number(prompt("Please enter how much you're going to spend on food"));
}
//checking if user has set an amount for gifts
while(gifts == ""){
    console.log("You did not enter an amount for gifts");
    gifts = Number(prompt("Please enter how much you're spending on gifts if nothing put 0"));
}
//adding all the money
var total = gas + food + gifts;
//subtracting the needed cash from your total cash
var sTotal = cash - total;

//telling the user he/she can go
if(sTotal >= 0){
    console.log("You can go with " + sTotal + " Dollars to spare")
}else{
    console.log("You cannot go because you are missing " + sTotal + " Dollars")
}