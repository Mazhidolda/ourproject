// Color project 1

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const colorView = document.querySelector(".color");

const colors = ["red", "blue", "green", "gray"];

btn.addEventListener('click', changeColor, true);

function changeColor() {
    console.log("btn clicked!");
    let lenColor = colors.length;
    randColor = Math.floor(Math.random() * lenColor);
    container.style.backgroundColor = colors[randColor];
    colorView.textContent = colors[randColor];
}



// Color project 2

// const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// const btn = document.querySelector(".btn");
// const container = document.querySelector(".container");
// const colorView = document.querySelector(".color");

// btn.addEventListener('click', function () {
//     let hex = "#";
//     for (let i = 0; i < 6; i++) {
//         hex += colors[randColor()];
//     }
//     container.style.backgroundColor = hex;
//     colorView.textContent = hex;
// })

// function randColor() {
//     let lenColors = colors.length;
//     return Math.floor(Math.random() * lenColors);
// }