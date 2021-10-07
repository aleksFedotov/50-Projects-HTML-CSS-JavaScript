const imgs = document.querySelector("#imgs")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")

const img = document.querySelectorAll("#imgs img")

let index = 0

let interval = setInterval(run, 2000);

function run() {
    index++

    changeImg()
}

function changeImg() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function reserInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener("click", () => {
    index++
    changeImg()
    reserInterval()
})

leftBtn.addEventListener("click", () => {
    index--
    changeImg()
    reserInterval()
})