document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Скрываем попап при загрузке страницы
    popup.style.display = "none";
    overlay.style.display = "none";

    function openPopup() {
        console.log("Открываем попап");
        popup.style.display = "block"; 
        overlay.style.display = "block";
        setTimeout(() => {
            popup.classList.add("show");
        }, 10);
    }

    function closePopup() {
        console.log("Закрываем попап");
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 300); // Даем время на анимацию
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", openPopup);
    });

    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
});


