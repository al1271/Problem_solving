//Alexander Garza 09/10/14 section 0 Expressions_Wacky

//Calculate how many 1x2 ft cakes would it take to fill and surround a football field.

var fLength = 100;
var fWidth = 55.3;
var pLength = prompt("What is the length of your cake?");
var pWidth = prompt("what is is width of your cake?");

//converting the pie into yards
//For every foot there is 0.333333 yards

var converted = pLength * 0.333333;
var converted2 = pWidth * 0.333333;

//determining the area of the football field and cake in yards

var areaFootball = fLength * fWidth;
var areaCake = converted * converted2;

//determining the perimeter of the football field

var perFootball = fLength + fLength + fWidth + fWidth;

//determining how many cakes can fit into a football field

var aFootCake = areaFootball / areaCake;

//determining how many cakes can go around a football field if placed length.

var pFootcake = perFootball / converted;

console.log("The area of a football field is " + areaFootball + "yd^2 and the area of a cake is " + areaCake + "yd^2 so from that information I determined that " + aFootCake +" cakes can fit in a football field, and the perimeter of a football field " +
    "is " + perFootball + "yd so from that I concluded that " + pFootcake + " cakes can fit around a football field if placed length ways");
