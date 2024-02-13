let table = document.createElement("table");
let number = '1';

for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
        let line = document.createElement("td");
        line.textContent = number
        number++
        row.appendChild(line);
    }
    table.appendChild(row);
}

document.querySelector('.container').appendChild(table);