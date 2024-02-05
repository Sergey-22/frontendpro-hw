function one () {
    let sum = 0;

    function two (number) {
        sum += number
        console.log(sum)
    }
    return two
}

let myFunction = one()

myFunction(3)
myFunction(5)
myFunction(20)