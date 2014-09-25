//Alexander Garza section 00 09/24/14 Review Quiz

var radius = Number(prompt("What is the radius of the circle?"));
var pi = 3.14;
while (radius == "" || isNaN(radius)){
    radius = Number(prompt("What is the radius of the circle?"));
}
function area(pi,r){

    var area = 2*pi*r;
    return console.log("The area of the circle is " + area + "measurement^2 ");
}

area(pi,radius);