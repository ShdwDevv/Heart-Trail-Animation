const bodyElement = document.querySelector('body');

const createHeart = (xPos, yPos) => {
    const spanElement = document.createElement('span');
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
};

bodyElement.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    createHeart(xPos, yPos);
});

bodyElement.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const xPos = touch.pageX;
    const yPos = touch.pageY;
    createHeart(xPos, yPos);
});
