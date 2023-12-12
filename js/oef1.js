// let h2 = document.getElementById('titel2');

// console.log(h2);

let h2 = document.querySelector('#titel2');

console.log(h2);

// let paragrafen = document.querySelectorAll('p');

let paragrafen = document.getElementsByTagName('p');   

console.log(paragrafen);
console.log('aantal paragrafen: ' + paragrafen.length);

for (let i = 0; i < paragrafen.length; i++) {
    console.log(paragrafen[i]);
}