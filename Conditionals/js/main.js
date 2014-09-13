//day 5 examples
/*
//basic Conditionals

var oldEnough = true;
//if the child is old enough, they can ride.

if(oldEnough){
    //If old enough is true is true you can ride
    //If false nothing happens
    console.log("You can ride!");
}


//relational Expressions
//if the kid is tall enough then they can ride
//kid has to be 48 in or taller
//kids height
var height = 50;
//min height
var minHeight = 48;

if(height >= minHeight){
    //if the kid is taller than or equal to the minimum height it can ride
    console.log("You can ride")
}




//conditional with an expressions

//set kids height
var kidHeight = 46;
//set min height
var minHeight = 48;
//sneaker life

var sneakerLift = 2;

//tall enough to ride with or without shoes

if(kidHeight + sneakerLift >= minHeight){

    //checking if kid is tall enough with shoes on, they can ride!

    console.log("you are tall enough with shoes on")
}


//If else statement
//choosing between two blocks of code
//stating the variables
var kidHeight = 48;
var minHeight = 48;
//minimum height to ride

if(kidHeight >= minHeight){
    //if true they can ride
    console.log("you can ride")

}else{
    //if false you are too short can't ride
    console.log("you cannot ride because you are too short.")
}



//else if

var kidHeight = 40;
var minHeight = 48;
//kid height to ride with parent
var wParentHeight = 45;
//if taller than the min height, you can ride
//if shorter than min height but with parent you can ride
//you are too short you cant ride

if(kidHeight >= minHeight){
    console.log("you can ride!")
}else if(kidHeight >= wParentHeight){
    //with parent
    console.log("you can ride with parent")


}else{
    console.log("go home!")
}
*/

var budget = 300;
var iPadPrice = 499.99;
var payCheck= 500;
/*
//is the price of iPad less than budget
if(iPadPrice <= budget){
    console.log("You can afford it!")
}else{
    console.log("you cannot afford it!")
}
//and if paycheck is over 600
if(payCheck > 600){
    console.log("you can buy it")
}else{
    console.log("you cannot afford it!")
}

//&& and operator - both must to be true to be true

if (iPadPrice <= budget && payCheck > 600){

    console.log("you can")

}else{

    console.log("you can't")

}
*/
var wonLottery = true;

if (iPadPrice < budget || wonLottery === true){
    console.log("you can")
}else{
    console.log("you cannot")
}

//ternary

var gpa = 4;

//if gpa is over 2.0, grad
if (gpa>2.0){
    console.log("you have passed")
}else{
    console.log("you failed")

}


//(condition to be met ? first set of stuff else stuff

(gpa > 2.0)?console.log("you have passes"):console.log("you failed");
