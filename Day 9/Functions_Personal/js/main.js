//Alexander Garza 09/22/14 section 00 Functions_Personal
//calculating GPA and if its a passing or failing grade
//asking user for first grade
var grade1 = Number(prompt("What is your grade in for first class?"));
//asking user for second grade
var grade2 = Number(prompt("What is your grade in for second class?"));
//asking user for 3rd grade
var grade3 = Number(prompt("What is your grade in for third class?"));

//calculating the average grade
var average= function(g1,g2,g3){
    var avarage = (g1 + g2 + g3)/3;
    return avarage
};

//calculating the average grade between the three classes
var thing= average(grade1,grade2,grade3);

//determining if they have passed for failed the semester
(thing <= 60) || thing <= 50?console.log("You have failed the semester") : console.log("You have passed the semester");

//Calculating the GPA fro the average grade
if(thing > 94){
    //A+ GPA
    console.log("You have a 4.0 GPA");
}else if(thing >= 87 && thing <= 94){
    //A GPA
    console.log("You have a 3.7 GPA");
    //B+ GPA
}else if(thing < 87 && thing >= 80){
    //B GPA
    console.log("You have a 3.3 GPA");
    //C+ GPA
}else if(thing > 80 && thing <= 73){
    //C GPA
    console.log("You have a 3.0 GPA");
    //D+ GPA
}else if(thing <= 73 && thing >= 66){
    //D GPA
    console.log("You have a 2.7 GPA");
}else if(thing <= 66 && thing >= 61){
    //F+ GPA
    console.log("You have a 2.3 GPA");
}else if(thing <= 60 && thing >= 53){
    //from 2.3 and under the user has failed
    console.log("you have a 2.0 GPA and you have failed the semester")
}else{
    //Anything under a 2.3 gpa
    console.log("You have failed your semester.")
}
