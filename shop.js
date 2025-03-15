/* shop.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    text-align: center;
}

header {
    background-color: yellow;
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
}

.container {
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
}

.free-points {
    background: white;
    padding: 20px;
    margin: 10px auto;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
    background-color: yellow;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
}

.shop-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 20px 0;
    white-space: nowrap;
    width: 100%;
    justify-content: center;
}

.shop-item {
    display: inline-block;
    background: white;
    padding: 20px;
    margin: 10px;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.scroll-btn {
    background-color: yellow;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px;
}

.shop-items-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
document.addEventListener("DOMContentLoaded", function () {
    const storeWrapper = document.querySelector(".store-wrapper");
    const leftButton = document.querySelector(".left-button");
    const rightButton = document.querySelector(".right-button");

    let scrollAmount = 0;
    const scrollStep = 320; // Размер прокрутки на один клик

    rightButton.addEventListener("click", function () {
        scrollAmount += scrollStep;
        storeWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    });

    leftButton.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            storeWrapper.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});

