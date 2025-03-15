document.addEventListener("DOMContentLoaded", function () {
    const shopItems = document.getElementById("shop-items");
    const scrollAmount = 300; // Шаг скролла

    window.scrollLeft = function () {
        shopItems.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    window.scrollRight = function () {
        shopItems.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };



