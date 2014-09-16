//Alexander Garza 09/15/14 section 00

//Determining if you can get more than one cookie and if the dog can have one.
//prompting amount of cookies
var cookies = Number(prompt("How many cookies are there?"));
//prompting amount of people
var people = Number(prompt("How many people are there?"));
//asking if there is a dog
var dog = prompt("is there a dog yes or no").toLowerCase();
//asking what type of cookies
var type = prompt("Are they oatmeal, chocolate chip, or fudge cookies?").toLowerCase();

if(cookies > people){
    //if cookies are greater than people you are able to have another cookie
    console.log("you are able to have more than one cookie")
}else{
    //if cookies are equal to or less than people you may not have another cookie
    console.log("you may not have more than one cookie")
}
if(dog === "yes" && type === "oatmeal" && cookies > people){
    //if there is a dog and the cookie is oatmeal and the cookies are greater than people then the dog may have a cookie
    console.log("The dog may have a cookie")
}else{
    //if there isn't a dog or the type of cookie isnt oatmeal or cookies are equal to or less than people the dog may not have a cookie
    console.log("the dog may not have a cookie")
}