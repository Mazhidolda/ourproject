function SearchFoods() {
    const search = document.querySelector(".search").value.toUpperCase();
    const cards = document.querySelectorAll(".menu-card");
    const foodTitle = document.querySelectorAll(".food-title");

    for (var i = 0; i < foodTitle.length; i++) {
        let match = cards[i].getElementsByTagName("h3")[0];
        if (match) {
            let foodName = match.textContent || match.innerHTML;
            if(foodName.toUpperCase().indexOf(search) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}
