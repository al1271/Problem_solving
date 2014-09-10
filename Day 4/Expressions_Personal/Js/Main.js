//Alexander Garza 09/10/14 section 0 Expressions

//How much money Alex need each month for expenses then for the year

//identifying the person

var name= "Alex";

//Amount spent per month

var rent = prompt("how much is rent a month?");
var electric = 160;
var water = 80;
var insurance = 123;
var food = 200;
var gas = prompt("how much do you spend on gas a month?");

//Calculating the amount that is spent through out the moth

var total = rent + electric + water + insurance + food + gas;

//using the total to calculate the amount it should be yearly

var yearTotal = total * 2;

//calculating what money Alex will be receiving throughout the month

var mate1 = 450;
var mate2 = 350;
var money = 1400;
var plasma = [35,40,35,50,35,40,40,50];

//using plasma to find out how much total Alex receive from plasma each month

var tPlasma = (plasma[0] + plasma[1] + plasma[2] + plasma[3] + plasma[4] + plasma[5] + plasma[6] + plasma[7]);

//Using the information to determine what my income per month is.

var income = mate1 + mate2 + money + tPlasma;

//using this information to calculate the amount Alex will get each year total

var yearIncome = income * 12;

//Using the total and the income to evaluate what the outcome is

var final = income - total;

//last using all the information given to find the left overs after a year

var yearExtra = final * 12;

console.log ("The amount of money " + name + " will need each month is $" + total + " and the amount of money he will have each month is $" + income + " so the amount of extra money I will have each month is $" + final +
" and the amount he will need for each year is $" + yearTotal + " and the amount he will have throughout the year is $" + yearIncome + " and the amount he will have extra each year is $" + yearExtra);
