let x = +prompt("Введіть перше число");
let y = +prompt("Введіть друге число");

switch (true) {
    case !isNaN(x) && !isNaN(y):
        console.log(`${x} + ${y} = ${x + y}`);
        console.log(`${x} - ${y} = ${x - y}`);
        console.log(`${x} * ${y} = ${x * y}`);
        switch (true) {
            case (y !== 0):
                console.log(`${x} / ${y} = ${x / y}`);
                break;
            default:
                console.log('Ділення на нуль');
        }
        break;
    default:
        console.log('not a number');
}