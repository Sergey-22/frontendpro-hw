document.querySelector('.flex__input').addEventListener('focus', () => {
    document.querySelector('.flex__ghost').style.display = 'block';
});

document.querySelector('.flex__input').addEventListener('blur', () => {
    document.querySelector('.flex__ghost').style.display = 'none';
});