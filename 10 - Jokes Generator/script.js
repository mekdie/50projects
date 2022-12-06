const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    // fetch("https://v2.jokeapi.dev/joke/Programming")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.joke) {
    //             jokeEl.innerHTML = data.joke;
    //         } else {
    //             generateJoke();
    //         }
    //     });
    // console.log("generate");

    //fetch return a promise of async, so we need to await until its done fetching
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming");

    const data = await res.json();

    if (data.joke) {
        jokeEl.innerHTML = data.joke;
    } else {
        generateJoke();
    }
}
