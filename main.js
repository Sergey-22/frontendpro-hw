const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {

    if (length > 0 && length !== 0) {
        let result = "";
        let min = 0;
        let max = characters.length - 1;
        for (let i = 0; i < length; i++) {
            let index = Math.floor(
                Math.random() * (max - min + 1) + min
            );
            result += characters[index];
        }
        return result;
    } else {
        console.log('Помилка');
    }
}

const key = generateKey(7, characters);
console.log(key);