let x  = +prompt("Введіть перше число");
let y  = +prompt("Введіть друге число");
let z  = +prompt("Введіть третє число");
if (!isNaN(x) || !isNaN (y) || !isNaN(z)) {
    alert ((x + y + z) / 3);
} else {
    alert("Помилка неприпустиме значення");
}




