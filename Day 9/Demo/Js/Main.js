//Alexander Garza 09/22/14 section 00 Demo
//random Number Function
//minimum number
/*
var min = 180;
//maximum number
var max = 220;
//setting up the call for the function
var ranNum = randomizer(min, max);
//console log of the random number
console.log(ranNum);
//function doing to random number
function randomizer(mn,mx){
    var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomNumber;
}
//recalling the function
for (var i = 0;i < 5; i++){

    console.log(randomizer(min, max))

}
//normal function
function functionname(parameters){
    //Code to execute;
    //return value;
}

//anonymous function

var functionName = function(parameters){
    //code to execute;
    //return value;
};

functionname(arguments);



var base = 10;
var height = 20;
triangleArea(base, height);

function triangleArea(b,h){

    area = .5*b*h;
    return area;

}


var array = ["limes", "grapes", "tacos", "stuff"];
console.log(array.length);
console.log(array);

//push (add) a new item to the ed of the array
array.push("toast", "pancake");

//pop (take away) removes last item from the array

array.pop();
 */

var lenght = 10;
var width  = 20;

function rectarea(l , w){

    var area = l * w;
    return area;


}

var perimeter = function(w,l){
    var per = 2 * w + 2 * l;
    return per;

};
console.log(rectarea(lenght,width));
console.log(perimeter(width,lenght));