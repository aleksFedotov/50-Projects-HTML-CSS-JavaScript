const resultEl = document.querySelector("#result")
const lenghtEl = document.querySelector("#lenght")
const uppercaseEl = document.querySelector("#uppercase")
const lowercaseEl = document.querySelector("#lowercase")
const numbersEl = document.querySelector("#numbers")
const symbolsEl = document.querySelector("#symbols")
const generateEl = document.querySelector("#generate")
const clipboardEl = document.querySelector("#clipboard")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNum,
    symbol: getRandomSymbol
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ""
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    if (typesCount === 0) {
        return ""
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

generateEl.addEventListener("click", () => {
    const length = +lenghtEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSybmol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSybmol, length)
})

clipboardEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = resultEl.innerText

    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
})