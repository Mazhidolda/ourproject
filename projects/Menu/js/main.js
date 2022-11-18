const buttons = document.querySelectorAll(".menu-links");
const cards = document.querySelectorAll(".menu-card");
const isBtnPressed = false;

buttons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const foods = e.target.dataset.food;

        cards.forEach((item) => {
            if(foods === 'all') {
                item.style.display = 'flex';
            } else {
                if(item.classList.contains(foods)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        })
    })
})