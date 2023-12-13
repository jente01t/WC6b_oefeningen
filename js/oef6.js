let slider = document.getElementById('slider');
let sliderValue = document.getElementById('sliderValue');


function sliderUpdate () {
    let txt = 'Huidige waarde: ' + slider.value;

    sliderValue.textContent = txt;
}