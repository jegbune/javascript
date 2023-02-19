import { convert } from "./romanfunction.js";

let input = document.getElementById('');
let button = document.querySelector("#Btn");
let result = document.querySelector(".result");

console.log(convert(80));

let input1 = Number(input.value);
button.addEventListener('click', convert(input1))
    
    // alert(input1);
// })
