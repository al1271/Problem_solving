//alexander garza
//calculate the circumference of a circle

var radius = Number(prompt("what is the radius of the circle?"));
var pi = 3.14;
var circum = calculateCircum(2, pi, radius);
console.log("The circumference of the circle is" + circum);

function calculateCircum( pi, radius){
    return 2*pi*radius
}

var weight = Number(prompt("How much does the animal weigh?"));
var stingPound = 8.666666667;
var amountStings = calculateAmount(weight, stingPound);
console.log("The amount fo stings it'll take to kill this animal is" + amountStings);

function calculateAmount(weight,stingPound) {

    return stingPound * weight

}