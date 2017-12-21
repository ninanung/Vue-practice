import calc from "./utils/utility"

let x = 5;
let y = 5;
let result = x + y;
let str = "<h2>" + x + " + " + y + " = " + result + "</h2>";

document.getElementById("app").innerHTML = str;