const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function setTime() {
    const time = new Date()
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`
    minuteEl.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`
    secondEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`
    dateEl.innerHTML = `${days[day]},${months[month]} <span class="cirle">${date}</span></div>`
}

toggle.addEventListener("click", () => {
    const html = document.querySelector("html")
    html.classList.toggle("dark")
    if (html.classList.contains("dark")) {
        toggle.innerText = "Light Mode"
    } else {
        toggle.innerText = "Dark Mode"
    }
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setInterval(setTime, 1000)