document.addEventListener("DOMContentLoaded", function() {
    let totalPoints = localStorage.getItem("totalPoints") || 0;
    let freeTaps = localStorage.getItem("freeTaps") || 50;

    document.getElementById("total-points").innerText = totalPoints;
    document.getElementById("free-taps").innerText = freeTaps;

    let tapCircle = document.getElementById("tap-button");
    if (tapCircle) {
        tapCircle.addEventListener("click", function() {
            if (freeTaps > 0) {
                totalPoints++;
                freeTaps--;
                document.getElementById("total-points").innerText = totalPoints;
                document.getElementById("free-taps").innerText = freeTaps;

                localStorage.setItem("totalPoints", totalPoints);
                localStorage.setItem("freeTaps", freeTaps);
            } else {
                alert("У вас закончились бесплатные тапы! Дождитесь обновления.");
            }
        });
    }
});
