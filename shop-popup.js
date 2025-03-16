document.addEventListener("DOMContentLoaded", function () {
    console.log("shop-popup.js загружен");

    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    const popupTitle = document.querySelector(".popup-title");
    const popupDescription = document.querySelector(".popup-description");
    const getCodeButton = document.querySelector(".popup-get-code");
    const codeText = document.querySelector(".popup-code-text");

    let purchasedProducts = {}; // Храним купленные товары

    // ✅ Скрываем попап при загрузке страницы
    popup.style.display = "none";
    overlay.style.display = "none";

   buyButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("Открываем попап");

        // ✅ Получаем данные конкретного товара
        const item = button.closest(".shop-item");
        const title = item.querySelector("h3").textContent;
        const discount = item.querySelector(".discount").textContent;
        const price = item.querySelector(".price").textContent;
        
        // ✅ Генерируем уникальный промо-код для товара (или берем его из данных)
        const promoCode = `PROMO-${title.replace(/\s/g, "").toUpperCase()}`;

        // ✅ Заполняем попап новыми данными
        document.querySelector(".popup-title").textContent = title;
        document.querySelector(".popup-description").innerHTML = `${discount} - Цена: ${price} очков`;

        // ✅ Сбрасываем отображение кнопки "Получить код"
        const getCodeButton = document.querySelector(".popup-get-code");
        const codeText = document.querySelector(".popup-code-text");

        getCodeButton.style.display = "block"; // Показываем кнопку
        codeText.style.display = "none"; // Прячем текст "COPY CODE"

        // ✅ Сохраняем код в data-атрибут, чтобы потом использовать его при копировании
        codeText.setAttribute("data-promo", promoCode);

        // ✅ Применяем стили только при открытии
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

        // ✅ Показываем попап
        popup.style.display = "block";
        overlay.style.display = "block";
        setTimeout(() => popup.classList.add("show"), 10);

        // ✅ Центрируем кнопку "Получить код"
        getCodeButton.style.marginTop = "auto";
        getCodeButton.style.alignSelf = "center";
    });
});

    // ✅ Обработчик "Получить код"
    getCodeButton.addEventListener("click", function () {
        const productTitle = popupTitle.textContent;
        if (!purchasedProducts[productTitle]) {
            console.log("Покупка товара:", productTitle);
            purchasedProducts[productTitle] = true;

            getCodeButton.style.display = "none"; // Скрываем кнопку
            codeText.style.display = "block"; // Показываем "COPY CODE"
            codeText.textContent = "COPY CODE";

            // Делаем кнопку "Купить" неактивной для товара
            document.querySelectorAll(".shop-item").forEach(item => {
                if (item.querySelector("h3").textContent === productTitle) {
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
