document.addEventListener("DOMContentLoaded", function () {
    let totalPoints = localStorage.getItem("totalPoints") || 0;
    let freeTaps = localStorage.getItem("freeTaps") || 50;
    let countdown = localStorage.getItem("countdown") || 0;
    const TAP_LIMIT = 50; // Лимит бесплатных тапов
    const RESET_TIME = 10; // ВРЕМЯ ДЛЯ ТЕСТА (в секундах)

    document.getElementById("total-points").innerText = totalPoints;
    document.getElementById("free-taps").innerText = freeTaps;

    let tapCircle = document.getElementById("tap-button");

    function updateCountdown() {
        let timerElement = document.getElementById("countdown-timer");
        if (countdown > 0) {
            timerElement.innerText = countdown;
            countdown--;
            localStorage.setItem("countdown", countdown);
            setTimeout(updateCountdown, 1000);
        } else {
            freeTaps = TAP_LIMIT;
            document.getElementById("free-taps").innerText = freeTaps;
            localStorage.setItem("freeTaps", freeTaps);
            localStorage.removeItem("countdown"); // Удаляем таймер из хранилища
        }
    }

    if (countdown > 0) {
        updateCountdown();
    }

    if (tapCircle) {
        tapCircle.addEventListener("click", function () {
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
    }
});
