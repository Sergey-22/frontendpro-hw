// Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log(`Вивести на сторінку в один рядок через кому числа від 10 до 20:`)
let result = "";
for (let i = 10; i <= 20; i++) {
    result = result + i;
    if (i < 20) {
        result = result + ', ';
    }
}
console.log(result);

//Вивести квадрати чисел від 10 до 20.
console.log(`Вивести квадрати чисел від 10 до 20:`)
for (let i = 10; i <= 20; i++) {
    let square = (i ** 2);
    console.log(square);
}

//Вивести таблицю множення на 7.
console.log(`Вивести таблицю множення на 7:`)
for (let i = 1; i <= 10; i++){
    console.log(`${i} * 7 = ${7 * i}`);
}

//Знайти суму всіх цілих чисел від 1 до 15.
console.log(`Знайти суму всіх цілих чисел від 1 до 15:`)
let sum = 0
for (let i = 1; i <= 15; i++) {
   sum = sum + i;
}
console.log(sum);

//Знайти добуток усіх цілих чисел від 15 до 35.
console.log(`Знайти добуток усіх цілих чисел від 15 до 35:`)
let x = 1;
for (let i = 15; i <= 35; i++) {
    x = x * i;
}
console.log(x);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
console.log(`Знайти середнє арифметичне всіх цілих чисел від 1 до 500:`)
let y = 0;
let quantity = 0;
for (let i = 1; i <= 500; i++) {
    y = y + i;
    quantity++;
}
console.log(y/quantity);

//Вивести суму лише парних чисел в діапазоні від 30 до 80
console.log(`Вивести суму лише парних чисел в діапазоні від 30 до 80:`)
let z = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
    z = z + i;
    }
}
console.log(z);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3
console.log(`Вивести всі числа в діапазоні від 100 до 200 кратні 3:`)
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
console.log(`Дано натуральне число. Знайти та вивести на сторінку всі його дільники:`)
let natural = 36;
for (let i = 1; i <= natural; i++) {
    if (natural % i === 0) {
        console.log(i);
    }
}

//Визначити кількість його парних дільників.
console.log(`Визначити кількість його парних дільників:`)
let natural1 = 36;
let doubles = 0;
for (let i = 1; i <= natural1; i++) {
    if (natural1 % i === 0 && i % 2 === 0) {
        doubles++;
    }
}
console.log(doubles);

//Знайти суму його парних дільників
console.log(`Знайти суму його парних дільників:`)
let natural2 = 36;
let doubles1 = 0;
for (let i = 1; i <= natural2; i++) {
    if (natural2 % i === 0 && i % 2 === 0) {
        doubles1 = doubles1 + i;
    }
}
console.log(doubles1);

//Надрукувати повну таблицю множення від 1 до 10
console.log(`Надрукувати повну таблицю множення від 1 до 10:`)
for (let i = 1; i <= 10; i++) {
    console.log(`Таблиця №${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${j * i}`);

    }
}