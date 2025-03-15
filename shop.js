document.addEventListener("DOMContentLoaded", function () {
    const shopItems = document.getElementById("shop-items");
    const scrollAmount = 300; // Шаг скролла

    if (shopItems) { // Проверяем, существует ли элемент
        window.scrollLeft = function () {
            shopItems.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        };

        window.scrollRight = function () {
            shopItems.scrollBy({ left: scrollAmount, behavior: "smooth" });
        };
    } else {
        console.error("Ошибка: shop-items не найден!");
    }
});
