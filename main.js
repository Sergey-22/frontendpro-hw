let img = document.querySelector('img')
img.addEventListener("click", () => {
    let index = Math.floor(
        Math.random() * (10 - 1 + 1) + 1
    );
    img.src = `./img/${index}.jpg`

})