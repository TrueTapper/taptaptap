document.addEventListener("DOMContentLoaded", function () {
    let totalPoints = localStorage.getItem("totalPoints") || 0;
    let freeTaps = localStorage.getItem("freeTaps") || 50;
    let countdown = localStorage.getItem("countdown") || 0;
    const TAP_LIMIT = 50; // Лимит бесплатных тапов
    const RESET_TIME = 10; // Тестовый таймер (10 секунд)

    document.getElementById("total-points").innerText = totalPoints;
    document.getElementById("free-taps").innerText = freeTaps;
    let timerElement = document.getElementById("countdown-timer");

    function updateCountdown() {
        if (countdown > 0) {
            timerElement.innerText = countdown; // Обновляем текст таймера
            countdown--;
            localStorage.setItem("countdown", countdown);
            setTimeout(updateCountdown, 1000);
        } else {
            freeTaps = TAP_LIMIT;
            document.getElementById("free-taps").innerText = freeTaps;
            localStorage.setItem("freeTaps", freeTaps);
            localStorage.removeItem("countdown"); // Удаляем таймер из хранилища
            timerElement.innerText = "00:00"; // Сбрасываем отображение таймера
        }
    }

    if (countdown > 0) {
        updateCountdown();
    }

    document.getElementById("tap-button").addEventListener("click", function () {
        if (freeTaps > 0) {
            totalPoints++;
            freeTaps--;
            document.getElementById("total-points").innerText = totalPoints;
            document.getElementById("free-taps").innerText = freeTaps;
            localStorage.setItem("totalPoints", totalPoints);
            localStorage.setItem("freeTaps", freeTaps);
        } else {
            alert("У вас закончились бесплатные тапы! Дождитесь обновления.");
            if (!localStorage.getItem("countdown")) {
                countdown = RESET_TIME;
                localStorage.setItem("countdown", countdown);
                updateCountdown();
            }
        }
    });
});
