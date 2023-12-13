let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let letter = document.getElementById('letters');

let output = document.getElementById('output');

for (let i = 0; i < alphabet.length; i++) {
    let txt = document.createTextNode(alphabet[i]);

    let div = document.createElement('div');

    div.classList.add('letter');

    div.id = alphabet[i]

    div.appendChild(txt);

    letter.appendChild(div);

    div.addEventListener('click', function () {
        output.appendChild(document.createTextNode(alphabet[i] + ' '));
    });

}

letter.addEventListener('click', function () {
        output.appendChild(txt);
    })