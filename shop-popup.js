document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Устанавливаем правильное отображение попапа
    popup.style.display = "none";
    overlay.style.display = "none";

    // Добавляем обработчики для кнопок "Купить"
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Открываем попап");
            popup.style.display = "block";
            overlay.style.display = "block";
            setTimeout(() => popup.classList.add("show"), 10); // Плавное появление
        });
    });

    // Закрытие попапа по нажатию на крестик
    closeBtn.addEventListener("click", function () {
        console.log("Закрываем попап");
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });

    // Закрытие попапа при нажатии на затемнённый фон
    overlay.addEventListener("click", function () {
        console.log("Закрываем попап (overlay)");
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });

    // Настраиваем внутреннее содержание попапа
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

