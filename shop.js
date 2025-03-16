// Загружаем баланс из localStorage или устанавливаем 10000 очков по умолчанию
let userBalance = localStorage.getItem("userBalance") ? parseInt(localStorage.getItem("userBalance")) : 10000;

// Функция для обновления отображения баланса
function updateBalanceDisplay() {
    document.querySelector(".user-balance").textContent = `Баланс: ${userBalance} очков`;
}

// Вызываем функцию при загрузке страницы
updateBalanceDisplay();

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
