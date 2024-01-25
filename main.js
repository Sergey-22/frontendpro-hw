let sign = prompt("Оберіть бажану операцію (+, -, *, /)");
let x = +prompt(`Введіть перше число`);
let y = +prompt(`Введіть друге число`);

switch (true) {
    case !isNaN(x) && !isNaN(y):
        switch (sign) {
            case "+" :
                console.log(`${x} ${sign} ${y} = ${x + y}`);
                break;
            case "-" :
                console.log(`${x} ${sign} ${y} = ${x - y}`);
                break;
            case "*" :
                console.log(`${x} ${sign} ${y} = ${x * y}`);
                break;
            case "/" :
                if (y !== 0) {
                    console.log(`${x} ${sign} ${y} = ${x / y}`);
                } else {
                    console.log('Ділення на нуль');
                }
                break;
            default :
                console.log(`Не вірне значення операції`);
        }
        break;
    default :
      console.log('Ви ввели не число');
}

