const password = document.querySelector("#password")
const background = document.querySelector("#background")

password.addEventListener("input", (e) => {
    const input = e.target.value
    const len = input.length
    const blurValue = 20 - len * 2
    background.style.filter = `blur(${blurValue}px)`

})
