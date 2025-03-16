// ✅ Загружаем баланс из localStorage или устанавливаем 50000 очков по умолчанию
let userBalance = localStorage.getItem("userBalance") ? parseInt(localStorage.getItem("userBalance")) : 50000;

// ✅ Функция для обновления отображения баланса
function updateBalanceDisplay() {
    document.querySelector(".user-balance").textContent = `Баланс: ${userBalance} очков`;
}

// ✅ Вызываем функцию при загрузке страницы
updateBalanceDisplay();

// ✅ Загружаем купленные товары из localStorage
let purchasedProducts = localStorage.getItem("purchasedProducts") ? JSON.parse(localStorage.getItem("purchasedProducts")) : {};

// ✅ Функция для блокировки купленных товаров при загрузке страницы
function restorePurchasedProducts() {
    document.querySelectorAll(".shop-item").forEach(item => {
        const title = item.querySelector("h3").textContent;
        if (purchasedProducts[title]) {
            item.querySelector(".buy-btn").textContent = "Куплено";
            item.querySelector(".buy-btn").disabled = true;
        }
    });
}

// ✅ Вызов функции, чтобы при загрузке страницы товары были заблокированы
restorePurchasedProducts(); 

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
