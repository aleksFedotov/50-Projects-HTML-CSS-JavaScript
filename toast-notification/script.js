const btn = document.querySelector(".btn")
const toasts = document.querySelector(".toasts")

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
]


btn.addEventListener("click", () => {
    createNotification()
})

const types = [
    "info",
    "success",
    "error"
]


function createNotification(message = null, type = null) {
    const notif = document.createElement("div")
    notif.classList.add("toast")
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)

}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}