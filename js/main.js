import { add as tasu,subtract,multiply as kake,divide } from "./mathFunctions.js";

const num1 = 10;
const num2 = 5;

// console.log("足し算：",add(num1,num2));
console.log("足し算：",tasu(num1,num2));
console.log("引き算：",subtract(num1,num2));
console.log("掛け算：",kake(num1,num2));
console.log("割り算：",divide(num1,num2));