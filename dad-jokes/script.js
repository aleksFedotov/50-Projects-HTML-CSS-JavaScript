const jokeBtn = document.querySelector("#jokeBtn")
const jokeEl = document.querySelector("#joke")

jokeBtn.addEventListener("click", getJoke)

getJoke();

async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeEl.innerText = data.joke
}




