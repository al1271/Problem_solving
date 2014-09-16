//Alexander Garza 09/15/14 section 0
//Determining how much someones car insurance will cost depending on their name and area.

var age = Number(prompt("How old are you?"));
var area = prompt("Do you live in Florida").toLowerCase();
var flArea = prompt("Do you live in orlando, miami, or ocala").toLowerCase();
//asking which part of the state they are living


//if age is under 25 and lives in florida
if(age <= 25 && area === "yes"){
    prompt(flArea);}
    if (flArea === "orlando"){
        //price if you live in orlando and under age of 25
        console.log("Your insurance will be $240 p/mo");
    }else if(flArea === "ocala"){
        //price if you live in ocala and under age of 25
        console.log("your insurance will be $180 p/mo");
    }else if(flArea === "miami"){
        //price if you live in miami and under age of 25
        console.log("your insurance will be 280 p/mo");
    }else{
        //if your area isnt registered in the database
        console.log("your area is not registered");
    }
if(age >= 26 && area === "Yes"){
    prompt(flArea);
    }else if(flArea === "ocala"){
    //if you're 26 or older and live in ocala
    console.log("your insurance will be $180 p/mo")
    }else if(flArea === "orlando"){
    //if you're 26 or older and live in orlando
    console.log("your insurance will me $200 p/mo")
    }else if(flArea === "miami"){
    //if you're 26 or older and live in orlando
    console.log("your insurance will be $225 p/mo")
    }else{
    //if your area isnt registered in the database
    console.log("your area is not registered")
}
if(area === "no"){
    //if your area isnt registered in the database
    console.log("your area is not supported")
}