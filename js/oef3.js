let btn = document.getElementById('btn1');

btn.addEventListener('click', function() {
    console.log('Yes! Het werkt');
});

let div = document.getElementById('container');

btn.addEventListener('click', function() {
    let p = document.createElement('p');

    let txt = document.createTextNode('Yes! Het werkt');

    p.appendChild(txt);

    div.appendChild(p);
});