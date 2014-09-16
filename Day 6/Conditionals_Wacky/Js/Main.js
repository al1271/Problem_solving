//Alexander Garza 09/15/14 section 00

//Determining if you can get more than one cookie and if the dog can have one.

var cookies = Number.prompt("How many cookies are there?");
var people = Number.prompt("How many people are there?");
var dog = prompt("is there a dog yes or no").toLowerCase();
var type = prompt("Are they oatmeal, chocolate chip, or fudge cookies?").toLowerCase();

if(cookies > people){
    console.log("you are able to have more than one cookie")
}
if(dog === "yes" && type === "oatmeal" && cookies > people){
    console.log("The dog may have a cookie")
}else{
    console.log("the dog may not have a cookie")
}