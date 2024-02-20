let nextButton = document.querySelector('#next-button');
let prevButton = document.querySelector('#prev-button');
let img = document.querySelector('img');
let index = 1;

nextButton.addEventListener("click", () => {
    index++;
    img.src = `./img/${index}.jpg`;

    if (index >= 5) {
        nextButton.style.opacity = '0';
        nextButton.style.pointerEvents = 'none';
    }

    if (index === 2) {
        prevButton.style.opacity = '1';
        prevButton.style.pointerEvents = 'auto';
    }
});

prevButton.addEventListener("click", () => {
    index--;
    img.src = `./img/${index}.jpg`;

    if (index <= 1) {
        prevButton.style.opacity = '0';
        prevButton.style.pointerEvents = 'none';
    }

    if (index < 5) {
        nextButton.style.opacity = '1';
        nextButton.style.pointerEvents = 'auto';
    }
});