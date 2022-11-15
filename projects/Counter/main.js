const counterValue = document.querySelector(".counterValue");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let count = 0;

decrease.addEventListener('click', function () {
    count -= 1
    counterValue.textContent = count;

    if (counterValue.textContent < 0) {
        counterValue.style.color = "red";
    } else if (counterValue.textContent > 0) {
        counterValue.style.color = "blue";
    } else {
        counterValue.style.color = "rgb(35, 33, 43)";
    }
})

reset.addEventListener('click', function () {
    count = 0;
    counterValue.textContent = count;
    counterValue.style.color = "rgb(35, 33, 43)";
})

increase.addEventListener('click', function () {
    count += 1
    counterValue.textContent = count;

    if (counterValue.textContent > 0) {
        counterValue.style.color = "blue";
    } else if(counterValue.textContent < 0) {
        counterValue.style.color = "red";
    } else {
        counterValue.style.color = "rgb(35, 33, 43)";
    }
})
