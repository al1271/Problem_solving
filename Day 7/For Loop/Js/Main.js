//for Loop interest rate on a loan

//starting amount on the loan
var sNumber = Number(prompt("How much money are you borrowing?"));
//interest rate on the loan
var iPYear = Number(prompt("What is the interest rate"));
//converting the percentage given
var iPYearCon = iPYear / 100;
//number of years the loan is for
var nYears = Number(prompt("How many years is the loan for?"));
//for each loop number of years will go up by one until the number is met
for(var i=1; i<=nYears; i++){
    var nAmount = sNumber / iPYearCon;
    nAmount = nAmount + sNumber;
    sNumber = nAmount;
    console.log("For year " + i + " you will owe $" + Math.round(nAmount));
}if(i === nYears) {
    console.log("By the end of the 3 years you will owe $" + Math.round(nAmount));
}
