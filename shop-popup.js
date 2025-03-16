document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Скрываем попап при загрузке страницы
    popup.style.display = "none";
    overlay.style.display = "none";

    // Функция для плавного открытия попапа
    function openPopup() {
        console.log("Открываем попап");
        popup.style.display = "block";
        overlay.style.display = "block";
        setTimeout(() => popup.classList.add("show"), 10); // Добавляем класс после небольшого задержки
    }

    // Функция для плавного закрытия попапа
    function closePopup() {
        console.log("Закрываем попап");
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300); // Ждем анимацию перед скрытием
        setTimeout(() => overlay.style.display = "none", 300);
    }

    // Назначаем обработчики событий
    buyButtons.forEach(button => {
        button.addEventListener("click", openPopup);
    });

    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
});


