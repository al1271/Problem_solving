//Alexander Garza 09/10/14 section 0 Expressions_Industry

//Calculate how many inches are in a 250x500 image with 120 dpi



var width = prompt("What is the width of your image?");
var height = prompt("what is the height of your image?");
var dpi = prompt("what dpi is it at?");


//using the following variables to calculate the inches of the image.

var inchW = width / dpi;
var inchH = height / dpi;

//using the output from the above to show the solutions

console.log("The width of a 250x500 image is " + inchW + "inches and the height of it would be " + inchH + "inches" );