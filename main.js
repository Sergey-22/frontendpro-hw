//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function average(massif) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < massif.length; i++) {
        if (!isNaN(massif[i])) {
            sum += massif[i];
            count++;
        }
    }

    if (count === 0) {
        console.log('Числові елементи відсутні');
    } else {
        console.log(sum / count);
    }
}

let massif1 = [1, 2.5, "a", 3, "b", 4.5, 5, 6, 7];
average(massif1);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
/*
function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            console.log(x / y);
            break;
        case '%':
            console.log(x % y);
            break;
        case '^':
            console.log(Math.pow(x, y));
            break;
        default:
            console.log('Невідомий знак');
            break;
    }
}

let x = +prompt('Введіть перше число:');
let znak = prompt('Введіть знак: +, -, *, /, %, ^');
let y = +prompt('Введіть друге число:');

doMath(x, znak, y);

//Написати функцію заповнення даними користувача двомірного масиву.

function dimensional(rows, cols) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = [];

        for (let j = 0; j < cols; j++) {
            let value = prompt(`Введіть значення для елемента`);
            row.push(value);
        }
        array.push(row);
    }

    return array;
}

let rows = +prompt('Введіть кількість рядків:');
let cols = +prompt('Введіть кількість стовпців:');

let myDimensional = dimensional(rows, cols);
console.log(myDimensional);

//

function removeLine(line, del) {
    let result2 = '';
    for (let i = 0; i < line.length; i++) {
        // Перевіряємо, чи поточний символ знаходиться у списку символів, які треба видалити
        if (del.indexOf(line[i]) === -1) {
            result2 += line[i];
        }
    }
    return result2;
}

let line = prompt('Введіть рядок:');
let del = prompt('Введіть символи, які треба видалити:').split(',');
let result = removeLine(line, del);
console.log(result);*/