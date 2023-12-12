function wijzig1 () {
    let pizza = document.getElementById('two');
    pizza.innerHTML = 'Lasagna';
    pizza.style.border = '1px solid red';
}

wijzig1();

function wijzig2 () {
    let hot = document.querySelectorAll('.hot');

    if (hot.length > 0) {
        hot[0].classList.remove('hot');
        hot[0].classList.add('cold');
    }
}

wijzig2();