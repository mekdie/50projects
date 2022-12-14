const API_URL =
    "https://api.themoviedb.org/3/discover/movie/?api_key=888ab77b38486a7f9bb6dbb1dc6679f1&page1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/multi?api_key=888ab77b38486a7f9bb6dbb1dc6679f1&query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const searchResult = document.getElementById("searchResult");
const searchResultDiv = document.getElementById("searchResultDiv");
const searchNotFound = document.getElementById("searchNotFound");
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    //check if movies is empty when searching
    searchNotFound.style.display = "none";
    if (movies.length === 0) {
        searchNotFound.style.display = "inline-block";
    }
    main.innerHTML = ""; //clear it
    movies.forEach((movie) => {
        //object destructing to get specific key from movie
        const { title, poster_path, vote_average, overview, name } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        //poster conditional if not found
        let posterPath = "";
        if (poster_path) {
            posterPath = IMG_PATH + poster_path;
        } else {
            posterPath = "no-poster.png";
        }

        //title conditional if not found
        if (title) titleName = title;
        else titleName = name;
        movieEl.innerHTML = `
        <img
            class="poster" src="${posterPath}" alt="${title}"
        />
        <div class="movie-info">
            <h3>${titleName}</h3>
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
    if (vote >= 7.5) {
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

    searchResultDiv.classList.add("display");
    searchResult.textContent = searchTerm;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
