const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

//interval run every 30 mili seconds

//on set interval call blur function

// blurring() = call a function
// blurring = a function
let int = setInterval(blurring, 25);

function blurring() {
    load++;
    //stopping the interval at 100
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`; //template literals using `` and $dollar sign

    //doing the opacity from 1 to 0 (as if from 0 to 100)
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// a function to scale a range of number into another range of number
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
