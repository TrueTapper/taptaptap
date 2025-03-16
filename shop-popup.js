document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");

    // Скрываем попап при загрузке страницы
    popup.style.display = "none";
    overlay.style.display = "none";

    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("Открываем попап");
        popup.style.display = "block";
        setTimeout(() => popup.classList.add("show"), 10); // Добавляем анимацию
        overlay.style.display = "block";
    });
});

closeBtn.addEventListener("click", function () {
    console.log("Закрываем попап");
    popup.classList.remove("show");
    setTimeout(() => popup.style.display = "none", 300); // Ждем анимацию перед скрытием
    overlay.style.display = "none";
});

    overlay.addEventListener("click", function () {
        console.log("Закрываем попап (overlay)");
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});


