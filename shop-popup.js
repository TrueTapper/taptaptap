document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const overlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".popup-close");
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            popup.style.display = "block"; 
            overlay.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});
