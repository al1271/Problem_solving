//Temperature Celsius to Fahrenheit depending on what the user has entered.
// telling the prompt to only accept numbers
//#1
var temp = Number(prompt("What temperature is it?"));
//types of temperatures
var temperatureType = prompt("Are you converting to celsius or fahrenheit");
//prompt asking what type of temperature

if(temperatureType == "fahrenheit"){
    console.log("the temperature is" + ((temp - 32) * 5 / 9) + "degrees Fahrenheit.")
} else if (temperatureType == "celsius") {
    console.log("The temperature is" + (temp * 9 / 5 + 32) + "degrees Celsius.")
}


//#2
//Listing correct user and pass
var user = "alex";
var pass = "999";
//listing entered user and pass
var eUser = "alex";
var ePass = "998";

//if Both are correct
if(eUser === user && ePass === pass){
    //console welcomes you
    console.log("Welcome, alex")
    //if user is incorrect and pass is correct
}else if(eUser != user && ePass === pass){
    //console says user is not found
    console.log("User not found. Try again.")
}else if (eUser === user && ePass != pass) {
    console.log("Password does not match our records.")
}else{
    console.log("User or password does not match our records please try again.")
}


//#3
var time = prompt("Is it between the times of 3pm and 5pm(Yes or No)");
var age = prompt("Are you under 10 or over 55? (Yes or No)");
var nTicket = 12;
var dTicket = 7;
if(time === "Yes" && age === "Yes"){
    console.log("Your ticket price is $" + dTicket )
}else if(time === "No" && age === "Yes"){
    console.log("Your ticket price is $" + dTicket)
}else{
    console.log("Your ticket price is $" + nTicket)
}

