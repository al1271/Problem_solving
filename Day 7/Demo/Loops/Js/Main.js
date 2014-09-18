// DEMO Loops

/*
//while loop
//counter variable
var count = 0;

//starting while loop with condition.
//while condition is true loop will run
//when condition false loop will stop
while(count<0){

    console.log("counter is counting");
    count++;  //counts until condition is false
}


//do while loop


var i= 0;
//set variable to hold our number

do{
    console.log("the number is" + i);
    i++
}while(i < 0);

//for loop

for(var j=0;j<20;j+=4){

    console.log("i ="+j);
}


//break

for(var k=0; k<5; k++){

    if(k == 2){
        break; //stops loop for cycling
    }
    console.log("k=" + k)
}


//beer example

for(var i=99; i>0;i-- ){

    console.log(i +" bottles of beer on the wall " + i + " bottles of beer");

}if(i===1){


    console.log("take one down pass it around no more bottles of beer")

}else{

    console.log("take one down pass it around " + (i - 1) + " bottles of beer");
}


//zombies in 8 days

var numZombies = 1;
var numBites = 4;
var days = 8;


for(var i=1; i<=days; i++){

    var newZombies = numZombies * numBites;
    numZombies = numZombies + newZombies;
    console.log("There are " + numZombies + " on day number " + i);
}
*/
//how much interest you will owe after 9 years

var names = ["yes", "no", "maybe" , "noo"];
for(var i=0; i<names.length; i++){
    console.log("you solved the case" + names[i] + "!")
}