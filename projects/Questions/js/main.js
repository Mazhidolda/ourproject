const openbtn = document.querySelectorAll(".open span")
const answer = document.querySelectorAll(".answer");

for(let i = 0; i < openbtn.length; i++) {
    openbtn[i].addEventListener('click', function(e) {
        answer[i].classList.toggle("answeropen");
        e.target.classList.toggle("rotateBtn");
    })
}