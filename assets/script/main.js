const [swithDivContain] = document.getElementsByClassName('swithDivContain')
const [longCanvas] = document.getElementsByClassName('longCanvas')

let swithDivCount = 0;

const swithDiv = (e) => {
    if (e.wheelDelta < 0) {
        swithDivCount++;
        if (swithDivCount > longCanvas.children.length - 1) {
            swithDivCount = longCanvas.children.length - 1
        }
    } else if (e.wheelDelta > 0) {
        swithDivCount--;
        if (swithDivCount < 0) {
            swithDivCount = 0
        }
    }
    longCanvas.style.transform = `translateY(-${swithDivCount}00vh)`
}

let startY = 0
const swithDivTouch = (e1) => {
    startY = e1.changedTouches[0].screenY;
}

swithDivContain.addEventListener('touchend', (e2) => {
    if (e2.changedTouches[0].screenY < startY) {
        swithDivCount++
        if (swithDivCount > longCanvas.children.length - 1) {
            swithDivCount = longCanvas.children.length - 1
        }
    } else if (e2.changedTouches[0].screenY > startY) {
        swithDivCount--;
        if (swithDivCount < 0) {
            swithDivCount = 0
        }
    }
    longCanvas.style.transform = `translateY(-${swithDivCount}00vh)`
})

setTimeout(() => {
    swithDivContain.addEventListener('mousewheel', swithDiv)
    swithDivContain.addEventListener('touchstart', swithDivTouch)
}, 1500);

