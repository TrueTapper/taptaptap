document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const popup = document.querySelector(".popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeButton = document.querySelector(".popup-close");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            popup.style.display = "block";
            overlay.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});
