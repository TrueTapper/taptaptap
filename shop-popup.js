document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Открываем попап");

            // ✅ Устанавливаем стили при открытии попапа
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.zIndex = "1001";
            popup.style.width = "50%"; 
            popup.style.maxWidth = "400px";
            popup.style.minHeight = "350px";
            popup.style.padding = "40px 20px";
            popup.style.background = "white";
            popup.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";

            popup.style.display = "block";
            overlay.style.display = "block";
            setTimeout(() => popup.classList.add("show"), 10); // Анимация появления

            // Настраиваем внутренний контент
            const popupContent = document.querySelector(".popup-content");
            popupContent.style.display = "flex";
            popupContent.style.flexDirection = "column";
            popupContent.style.alignItems = "center";
            popupContent.style.justifyContent = "flex-start";
            popupContent.style.height = "100%";

            // Двигаем кнопку промокода вниз
            const promoButton = document.querySelector(".popup-code");
            promoButton.style.marginTop = "auto";
        });
    });

    closeBtn.addEventListener("click", function () {
        console.log("Закрываем попап");
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        console.log("Закрываем попап (overlay)");
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });
});

