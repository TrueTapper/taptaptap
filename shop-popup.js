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
            const product = button.closest(".shop-item"); // Получаем конкретный товар
            const title = product.querySelector("h3").textContent;
            const discount = product.querySelector(".discount").textContent;
            const price = product.querySelector(".price").textContent;
            const promoCode = `CODE-${title.toUpperCase().replace(" ", "-")}`; // Генерируем уникальный код

            console.log("Открываем попап для:", title);

            // ✅ Устанавливаем данные в попап
            popupTitle.textContent = title;
            popupDescription.textContent = `${discount} - Цена: ${price} очков`;
            codeText.dataset.code = promoCode;

            if (purchasedProducts[title]) {
                getCodeButton.style.display = "none";
                codeText.style.display = "block";
                codeText.textContent = "COPY CODE";
            } else {
                getCodeButton.style.display = "block";
                getCodeButton.textContent = "Получить код";
                codeText.style.display = "none";
            }

            // ✅ Восстанавливаем стили попапа (фиксируем его в центре)
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
            setTimeout(() => popup.classList.add("show"), 10);
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
