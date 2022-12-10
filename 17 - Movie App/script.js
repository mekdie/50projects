const API_URL =
    "https://api.themoviedb.org/3/discover/movie/?api_key=888ab77b38486a7f9bb6dbb1dc6679f1&page1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=888ab77b38486a7f9bb6dbb1dc6679f1&query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = ""; //clear it
    movies.forEach((movie) => {
        //object destructing to get specific key from movie
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img
            src="${IMG_PATH + poster_path}" alt="${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;
        main.appendChild(movieEl);
    });
}

//to get the vote colours
function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); //so that it doesnt actually submit

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
