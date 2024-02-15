//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let first = prompt('Введіть першу строку');
let second = prompt('Введіть другу строку');
let third = prompt('Введіть третю строку');

console.log(first + ' ' + second + ' ' + third);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
function smash(number) {
    let turn = number.toString();
    let result = '';
    for (let i = 0; i < turn.length; i++) {
        result += turn[i];
        if (i !== turn.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}

smash(39299);