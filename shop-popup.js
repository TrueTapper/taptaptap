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
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "1001";
        overlay.style.display = "block";
        overlay.style.zIndex = "1000";

        console.log("Текущие стили попапа:", popup.style.cssText);
    });
});

    closeBtn.addEventListener("click", function () {
        console.log("Закрываем попап");
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        console.log("Закрываем попап (overlay)");
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});


