//1.Знайти суму та кількість позитивних елементів.
console.log('1. Знайти суму та кількість позитивних елементів.');

let massif = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let quantity = 0;
let sum = 0;
massif.forEach(function (element) {
    if (element > 0) {
        quantity++;
        sum += element;
    }
});
console.log(`Кількість позитивних елементів = ${quantity}`);
console.log(`Сума позитивних елементів = ${sum}`);

//Знайти мінімальний елемент масиву та його порядковий номер.
console.log('2. Знайти мінімальний елемент масиву та його порядковий номер.');

let minElement = massif[0];
let minIndex = 0;

massif.forEach(function (element, index) {
    if (element < minElement) {
        minElement = element;
        minIndex = index;
    }
});
console.log(`Мінімальний елемент масиву = ${minElement}`);
console.log(`Порядковий номер = ${minIndex}`);

//Знайти максимальний елемент масиву та його порядковий номер.
console.log('3. Знайти максимальний елемент масиву та його порядковий номер.');

let maxElement = massif[0];
let maxIndex = 0;

massif.forEach(function (element, index) {
    if (element > maxElement) {
        maxElement = element;
        maxIndex = index;
    }
});
console.log(`Максимальний елемент масиву = ${maxElement}`);
console.log(`Порядковий номер = ${maxIndex}`);

//Визначити кількість негативних елементів.
console.log('4. Визначити кількість негативних елементі');

let negative = 0;
massif.forEach(function (element){
    if (element < 0) {
        negative++;
    }
});

console.log(`Кількість негативних елементів = ${negative}`);

//Знайти кількість непарних позитивних елементів.
console.log('5. Знайти кількість непарних позитивних елементів.');

let odd = 0;
massif.forEach(function (element){
    if (element > 0 && element % 2 !== 0) {
        odd++;
    }
})

console.log(`Кількість непарних позитивних елементів = ${odd}`);

//Знайти кількість парних позитивних елементів.
console.log('6. Знайти кількість парних позитивних елементів.');

let doubles = 0;
massif.forEach(function (element){
    if (element > 0 && element % 2 === 0) {
        doubles++;
    }
});

console.log(`Кількість парних позитивних елементів = ${doubles}`)

//Знайти суму парних позитивних елементів.
console.log('7. Знайти суму парних позитивних елементів.');

let sumDoubles = 0;
massif.forEach(function (element){
    if (element > 0 && element % 2 === 0) {
        sumDoubles += element;
    }
});

console.log(`Сума парних позитивних елементів = ${sumDoubles}`);

//Знайти суму непарних позитивних елементів.
console.log('8. Знайти суму непарних позитивних елементів.');

let sumOdd = 0;
massif.forEach(function (element){
    if (element > 0 && element % 2 !== 0) {
        sumOdd += element;
    }
});

console.log(`Сума непарних позитивних елементів = ${sumOdd}`);

//Знайти добуток позитивних елементів.
console.log('9. Знайти добуток позитивних елементів.');

let multiplication = 1;
massif.forEach(function (element){
    if (element > 0) {
        multiplication *= element;
    }
});
console.log(`Добуток позитивних елементів = ${multiplication}`);

//Знайти найбільший серед елементів масиву, інші обнулити.
console.log('10. Знайти найбільший серед елементів масиву, інші обнулити.');

let maxElement2 = massif[0];

massif.forEach(function (element) {
    if (element > maxElement2) {
        maxElement2 = element;

    }
});

massif.forEach(function (element, index) {
    if (element !== maxElement2) {
        massif[index] = 0;
    }
});
console.log(`Максимальний елемент масиву = ${maxElement2}`);
console.log(`Масив після обнулення: ${massif}`);
