document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    const popupTitle = document.querySelector(".popup-title");
    const popupDescription = document.querySelector(".popup-description");
    const promoButton = document.querySelector(".popup-get-code");
    const codeText = document.querySelector(".popup-code-text");

    let purchasedProducts = {}; // Храним купленные товары

    // ✅ Скрываем попап при загрузке страницы
    popup.style.display = "none";
    overlay.style.display = "none";

    // ✅ Обрабатываем клик на кнопки "Купить"
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = button.closest(".shop-item"); // Получаем товар
            const title = product.dataset.title;
            const discount = product.dataset.discount;
            const price = product.dataset.price;
            const promoCode = product.dataset.code;

            console.log("Открываем попап для:", title);

            popupTitle.textContent = title;
            popupDescription.textContent = `${discount} - Цена: ${price} очков`;

            if (purchasedProducts[title]) {
                promoButton.style.display = "none"; // Убираем кнопку "Получить код"
                codeText.style.display = "block"; // Показываем "COPY CODE"
                codeText.textContent = "COPY CODE";
                codeText.dataset.code = promoCode;
            } else {
                promoButton.style.display = "block";
                promoButton.textContent = "Получить код";
                codeText.style.display = "none";
            }

            popup.style.display = "block";
            overlay.style.display = "block";
            setTimeout(() => popup.classList.add("show"), 10);
        });
    });

    // ✅ Обработчик нажатия "Получить код"
    promoButton.addEventListener("click", function () {
        const productTitle = popupTitle.textContent;
        if (!purchasedProducts[productTitle]) {
            console.log("Покупка товара:", productTitle);
            purchasedProducts[productTitle] = true;
            promoButton.style.display = "none"; // Скрываем кнопку покупки
            codeText.style.display = "block"; // Показываем код
            codeText.textContent = "COPY CODE";

            // Делаем кнопку "Купить" неактивной для конкретного товара
            document.querySelectorAll(".shop-item").forEach(item => {
                if (item.dataset.title === productTitle) {
                    const btn = item.querySelector(".buy-btn");
                    btn.textContent = "Куплено";
                    btn.disabled = true;
                }
            });
        }
    });

    // ✅ Копирование кода в буфер
    codeText.addEventListener("click", function () {
        if (codeText.textContent === "COPY CODE") {
            const promoCode = codeText.dataset.code;
            navigator.clipboard.writeText(promoCode).then(() => {
                console.log("Промо-код скопирован:", promoCode);
                codeText.textContent = "Скопировано!";
                setTimeout(() => {
                    codeText.textContent = "COPY CODE";
                }, 2000);
            }).catch(err => {
                console.error("Ошибка копирования:", err);
            });
        }
    });

    // ✅ Закрытие попапа
    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
        overlay.style.display = "none";
    });
});
