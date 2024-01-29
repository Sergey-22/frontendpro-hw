const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, element) {
    let place = array.indexOf(element);
    if (place !== -1) {
        array.splice(place, 1);
        console.log(array);
    } else {
        console.log('Елемент відсутній у масиві');
    }
}

removeElement(array, 5)
