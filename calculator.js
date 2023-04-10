let what = prompt("Выберете операцию (+, -, *, /, **, //, %): ");

let a = parseFloat(prompt("Введите первое число: "));
let b = parseFloat(prompt("Введите второе число: "));

if (what === "+") {
   let c = a + b;
   console.log("Результат: " + c);
}
else if (what === "-") {
   let c = a - b;
   console.log("Результат: " + c);
}
else if (what === "*") {
   let c = a * b;
   console.log("Результат: " + c);
}
else if (what === "/") {
   let c = a / b;
   console.log("Результат: " + c);
}
else if (what === "**") {
   let c = Math.pow(a, b);
   console.log("Результат: " + c);
}
else if (what === "//") {
   let c = Math.floor(a / b);
   console.log("Результат: " + c);
}
else if (what === "%") {
   let c = a % b;
   console.log("Результат: " + c);
}
else {
   console.log("Это ещё что-за херня?");
}

