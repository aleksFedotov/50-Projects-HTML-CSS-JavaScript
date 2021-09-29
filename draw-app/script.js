const canvas = document.querySelector("#canvas")
const decreaseBtn = document.querySelector("#decrease")
const increaseBtn = document.querySelector("#increase")
const sizeEl = document.querySelector("#size")
const colorEl = document.querySelector("#color")
const clearBtn = document.querySelector("#clear")

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
let color = "black"
let x
let y

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

canvas.addEventListener("mousedown", (e) => {
    isPressed = true

    x = undefined
    y = undefined
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

colorEl.addEventListener("change", (e) => {
    color = e.target.value
})

increaseBtn.addEventListener("click", () => {
    size += 5
    if (size > 50) {
        size = 50
    }
    sizeEl.innerText = size
})

decreaseBtn.addEventListener("click", () => {
    size -= 5
    if (size < 0) {
        size = 0
    }
    sizeEl.innerText = size
})

clearBtn.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height))


