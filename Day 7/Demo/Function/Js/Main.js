//alexander garza
/*
var fruit = ["apple", "apricot", "banana", "orange", "grape"];
var totalFruit = 0;

if (fruit[0] === "apple"){
    totalFruit++;
}

for(var i=0;i <fruit.length === "apple"; i++){
    if(fruit[i] === "apple"){
        totalFruit++;
    }


}
console.log("there are " + totalFruit + " " + "apples.");
*/
//alexander garza
//calculate the circumference of a circle
//asking the user what the radius is



var radius = Number(prompt("what is the radius of the circle?"));
//using 3.14 for pi
var pi = 3.14;
//setting up the function call
var circum = calculateCircum(2, pi, radius);
//output once the function is run
console.log("The circumference of the circle is" + circum);
//calculating the circumference of the circle
function calculateCircum( pi, radius){
    //what the console log is going to spit out after calculation
    return 2*pi*radius;



//Stung!!! Calculating the amount of stings it'll take to kill an animal depending on its weight


}
//asking the user what the weight of the animal is
var weight = Number(prompt("How much does the animal weigh?"));
//Amount of stings itll take to kill an animal per pound
var stingPound = 8.666666667;
//setting up the function call
var amountStings = calculateAmount(weight, stingPound);
//setting up the output of the amount of stings itll take to kill the animal
console.log("The amount of stings it'll take to kill this animal is" + amountStings);
//calling the function
function calculateAmount(weight,stingPound) {
    //what the console log is going to spit out after calculation
    return stingPound * weight;

}