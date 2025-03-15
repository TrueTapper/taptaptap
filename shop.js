let currentIndex = 0;

function scrollLeft() {
    const items = document.querySelector('.shop-items');
    const itemWidth = document.querySelector('.shop-item').offsetWidth;
    if (currentIndex > 0) {
        currentIndex--;
        items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

function scrollRight() {
    const items = document.querySelector('.shop-items');
    const itemWidth = document.querySelector('.shop-item').offsetWidth;
    const maxIndex = items.children.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}
