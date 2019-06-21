let btn = document.querySelector("#btn");
let body = document.querySelector("section");
let con = document.querySelector(".form-container");
let btns = document.querySelector("#btns");
let name = document.querySelector(".name").value;
let server = document.querySelector(".server").value;
let amount = document.querySelector(".amount").value;
let perc = document.querySelector(".perc").value;
const percentage = 0.01;
var tip;
btn.addEventListener("click", showTipCalculator);
btns.addEventListener("click", calcTip);
function showTipCalculator(){
    con.style.display = "flex";

    
}
function calcTip(){
    tip = perc * percentage * amount;
alert(`Hello ${name} you left a tip of ${tip} to ${server}`)

}