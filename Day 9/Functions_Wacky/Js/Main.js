//Alexander Garza 09/22/14 section 00 Functions_Wacky
//Calculate the amount of trees it will take to reach the moon depending on type of tree
//height of oak tree
var oak = 70;
//height of willow tree
var willow = 40;
//height of redwood tree
var redwood = 360;
//distance form earth to the moon
var distanceMoon = 1240800;
//function calculating how many oak trees it would take to reach the moon
var oakResult= function(d,o){

    var oDistance = d / o;
    return Math.round(oDistance);
};
//calculating how many willow trees it would take to reach the moon
var willowResult= function(d, w) {
    var wDistance = d / w;
    return Math.round(wDistance)
};
//calculating how many redwood trees it would take to reach the moon
var redwoodResult = function(d, r){

    var rDistance = d / r;
    return Math.round(rDistance);

};
//the results of oak trees
var or = oakResult(distanceMoon, oak);
//result of willow tree
var wr = willowResult(distanceMoon, willow);
//result of redwood tree
var rw = redwoodResult(distanceMoon,redwood);
//asking using which tree he would wish to use
var type= prompt("What type of tree is it choose from (Oak, Willow, RedWood)").toLowerCase();
//if nothing is entered
while (type === ""){
    prompt("Please enter a type of tree (Oak,Willow,Redwood)".toLowerCase())
}
//calling the function depending on which tree
if (type === "oak"){
//oak
    console.log("The amount of oak trees it'll take to reach the moon are " + or);
//willow
    }else if(type === "willow"){

    console.log("The amount of willow trees it'll take to reach the moon are " + wr)
//redwood
    }else if(type === "redwood"){

    console.log("The amount of redwood trees it'll take to reach the moon are " + rw);
    }


