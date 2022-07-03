let color1 = "red";
let color2 = "blue";

let cache = color1;
color1 = color2;
color2 = cache;

console.log(color1);
console.log(color2);
