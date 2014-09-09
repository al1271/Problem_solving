//alexander garza 09/08/14 section 0 day3LabExpressions

//calculate number of slices eaten per person
var pizzas = 10;
var slices = 4;
var people = 8;
//multiply slices * pizzas then divide people to find slices per person
var perPerson= (pizzas * slices) / people;
//output perPerson
console.log("Each person ate " + perPerson + " slices of pizza at the party");

//Calculate number of slices for Sparky
people = 10;
pizzas = 4;
slices = 8;
//multiply slices * pizza then use the modulo on people
var sparky = (slices * pizzas) % people;

console.log("sparky got " + sparky + " slices of pizza");

//Average shopping bill
//declaring bill amounts
var bills=[80,70,90,40,65];
