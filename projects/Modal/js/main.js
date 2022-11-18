const toModlBtn = document.querySelector(".toModal");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

toModlBtn.addEventListener('click', function() {
    modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove("open-modal");
})