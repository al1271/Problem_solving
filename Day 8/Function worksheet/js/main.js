//Alexander Garza 09/19/14 section 00

//Circumference. Calculating the circumference of a circle depending on its radius.

var radius = Number(prompt("what is the radius of the circle?"));
//using 3.14 for pi
var pi = 3.14;
//setting up the function call
var circum = calculateCircum(2, pi, radius);
//output once the function is run
console.log("The circumference of the circle is " + circum);
//calculating the circumference of the circle
function calculateCircum( pi, radius) {
    //what the console log is going to spit out after calculation
    return 2 * pi * radius;
}



//Stung!!! Calculating the amount of stings it'll take to kill an animal depending on its weight


//asking the user what the weight of the animal is
var weight = Number(prompt("How much does the animal weigh?"));
//Amount of stings itll take to kill an animal per pound
var stingPound = 8.666666667;
//setting up the function call
var amountStings = calculateAmount(weight, stingPound);
//setting up the output of the amount of stings itll take to kill the animal
console.log("It takes"+ amountStings + "bee stings to kill this animal.");
//calling the function
function calculateAmount(weight,stingPound) {
    //what the console log is going to spit out after calculation
    return stingPound * weight;

}
