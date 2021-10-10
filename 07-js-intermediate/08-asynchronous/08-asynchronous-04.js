const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (USERNAME) => {
    try {
        const users = await fetch(`https://api.github.com/users/${USERNAME}`,
        {method: 'GET'});
        const json = await users.json()
        const data = await json;
        return data;

    } catch (error) {
        console.log(error);
    }
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();
    let input = elFormUsername.firstElementChild.value
    let data = await getGitHubUser(input)

    if (data.login) {

        elCardImg.classList.remove("d-none")
        elCard.classList.remove("d-none")
        elCardBtn.classList.remove("d-none")
        elCardTitle.innerText = data.login
        elCardImg.src = data.avatar_url
        elCardBtn.href = data.html_url

        elFormUsername.firstElementChild.value = ""
        return elCard
    }

    else {

        elCardImg.classList.add("d-none")
        elCardBtn.classList.add("d-none")
        elCardTitle.innerText = `Not Found`;

        return elCard
    }
};