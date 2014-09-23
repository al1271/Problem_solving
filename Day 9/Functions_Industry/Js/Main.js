//Alexander Garza 09/22/14 section 00 Functions_Industry

//calculating the perimeter and area of office to determine if you can fit your desk and how much trim you will need
// for around the roof of your office
//asking user for desk width
var deskw = Number(prompt("What is the width of the desk (inches)"));
//asking user for desk length
var deskl = Number(prompt("What is the length of the desk (inches)"));
//asking user for desk height
var deskh = Number(prompt("What is the height of the desk (inches)"));
//asking user for office width
var officew = Number(prompt("What is the width of the office (inches)"));
//asking user for office length
var officel = Number(prompt("What is the length of the office (inches)"));
//asking user for office height
var officeh = Number(prompt("What is the height of the office (inches)"));


//calculating the volume and perimeter of said objects
function volume(l,w,h){
    var volume = l * w * h;
    return volume;
}
function perimeter(l,w){
    var perimeter = 2*l + 2*w;
    return perimeter
}
//determining if the desk will fit into the office
if(volume(deskl,deskw,deskh) <= volume(officeh,officew,officel)){
    console.log("you can fit the desk into the office")
}
//determining how much tape you will need to go around the office
console.log("You must have " + perimeter(officel,officew) + "ft of border to go around your office");
