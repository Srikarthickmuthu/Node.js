//variable var let const

//imports 

const helpers=require("./function1");

const total = helpers.sum(4,5);

console.log("Total :",total);

const multiple=helpers.multiple(5,9);

console.log("arrow_multiple",multiple);

//using object destructuring

const { sum }=require("./function1")

console.log("Object destruturing Sum :" ,sum(10,20));