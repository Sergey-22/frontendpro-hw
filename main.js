let hour = +prompt('Введіть кількість годин');

if (!isNaN(hour)) {
    let seconds = hour * 3600;
    alert(`У ${hour} годинах ${seconds} секунд`);
} else {
   alert('Ви ввели не число');
}







