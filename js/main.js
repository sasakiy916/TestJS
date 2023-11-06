// import { add as tasu, subtract, multiply as mult, divide } from "./mathFunctions.js";

// const a = 10;
// const b = 5;

// console.log("足し算：", tasu(a, b));
// console.log("引き算：", subtract(a, b));
// console.log("掛け算：", mult(a, b));
// console.log("割り算：", divide(a, b));
class Human {
    constructor() {
        this.name = "sasaki";
    }
    hello() {
        console.log("kkkkkk");
    }
}
new Human.hello();
const result = document.getElementById("result");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    console.log(result.innerText);
});
