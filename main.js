function recursive(num, degree) {
    switch (true) {
        case degree === 0:
            return 1;
        case num === 0:
            return 0;
        case num !== 0 && degree > 0:
            return num * recursive(num, degree - 1);
        default:
            return 'Помилка';
    }
}

let result = recursive(11, 2);
console.log(result);