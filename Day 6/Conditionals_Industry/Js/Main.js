//Alexander Garza 09/15/14
//Determining how much someones car insurance will cost depending on their name and area.

var age = Number(prompt("How old are you?"));
var area = prompt("Do you live in Florida or Georgia?").toLowerCase();
var flArea = prompt("Do you live in orlando, miami, or ocala").toLowerCase();
//asking which part of the state they are living



if(age <= 25 && area === "florida"){
    prompt(flArea);}
    if (flArea === "orlando"){
        console.log("Your insurance will be $240 p/mo");
    }else if(flArea === "ocala"){
        console.log("your insurance will be $180 p/mo");
    }else if(flArea === "miami"){
        console.log("your insurance will be 280 p/mo");
        close()
    }else{
        console.log("your area is not registered");
    }
if(age >= 25 && area === "florida"){
    prompt(flArea);
}else if(flArea === "ocala"){
    console.log("your insurance will be $180 p/mo")
}else if(flArea === "orlando"){
    console.log("your insurance will me $200 p/mo")
}else if(flArea === "miami"){
    console.log("your")
}


