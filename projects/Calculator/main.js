const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clr = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const sqrt = document.querySelector(".sqrt");


buttons.forEach(buttons => {
    buttons.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', function (e) {
    if (screen.value === '') {
        screen.value = "";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clr.addEventListener('click', function () {
    screen.value = "";
})

sqrt.addEventListener('click', function () {
    screen.value = Math.sqrt(screen.value);
})