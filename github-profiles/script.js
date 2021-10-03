const APIURL = 'https://api.github.com/users/'

const form = document.querySelector("#form")
const search = document.querySelector("#search")
const main = document.querySelector("#main")



async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard("No profile wtih this username")
        }

    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + "/repos?sort=created")

        addReposToCard(data)
    } catch (err) {
        createErrorCard("Problem fetching repos")
    }
}


function createUserCard(user) {
    const cardHtml = `<div class="card">
                            <div>
                                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
                            </div>
                            <div class="user-info">
                                <h2>${user.name}</h2>
                                <p>${user.bio}</p>

                                <ul>
                                    <li>${user.followers} <strong>Followers</strong></li>
                                    <li>${user.following} <strong>Following</strong></li>
                                    <li>${user.public_repos} <strong>Repos</strong></li>
                                </ul>

                                <div id="repos">
                                  
                                </div>
                            </div>
                        </div>
                    `
    main.innerHTML = cardHtml
}

function addReposToCard(repos) {
    const reposEl = document.querySelector("#repos")

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement("a")
            repoEl.classList.add("repo")
            repoEl.href = repo.html_url
            repoEl.target = "_blank"
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

function createErrorCard(msg) {
    const errorCard = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = errorCard
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ""
    }
})