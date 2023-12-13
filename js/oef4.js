let btn = document.getElementsByClassName("color-btn");

function bgColor() {
    if (btn.length >= 1) {
        for (let i = 0; i < btn.length; i++) {
            let color = btn[i].getAttribute("value");
            btn[i].style.backgroundColor = color;

            btn[i].addEventListener('click', function () {
                document.body.style.backgroundColor = color;
            })
        }
    }
}

bgColor();
