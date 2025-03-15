document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.querySelector(".popup-close");

    // Функция открытия попапа
    function openPopup() {
        popup.style.display = "flex";
    }

    // Функция закрытия попапа
    function closePopupHandler() {
        popup.style.display = "none";
    }

    // Закрытие по кнопке
    closePopup.addEventListener("click", closePopupHandler);

    // Закрытие по клику вне окна
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopupHandler();
        }
    });

    // Вешаем обработчик на кнопки "Купить" в товарах
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", openPopup);
    });
});
