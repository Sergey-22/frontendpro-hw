function sortArray(arr) {
    arr.sort(function(a, b){return a - b});
}

let length = +(prompt("Введіть довжину масиву:"));

let myArray = [];

for (let i = 0; i < length; i++) {
    let element = +(prompt("Введіть елемент " + (i + 1) + ":"));
    myArray.push(element);
}

console.log("Ваш масив:", myArray);

let myArrayCopySort = myArray.slice();

sortArray(myArrayCopySort);

console.log("Відсортований масив за зростанням:", myArrayCopySort);

let myArrayCopy = myArrayCopySort.slice();
myArrayCopy.splice(1, 3);

console.log("Масив після видалення елементів з 2 по 4:", myArrayCopy);