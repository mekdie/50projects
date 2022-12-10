const tagContainer = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus(); // auto focus on this text area on load

//event listener when you press and let go a key in keyboard (enter)
textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value); //getting value of what we are typing

    //if we hit enter than do this
    if (e.key === "Enter") {
        //do anything inside after 100ms
        setTimeout(() => {
            //clear the text
            e.target.value = "";
        }, 100);
        randomSelect();
    }
});

function createTags(input) {
    //split that comma and make an array between comma as splitter

    //map each element in the array to remove white space from the both ends of a string

    //filter array of string to remove any white space or empty element (only space)
    const tags = input
        .split(",")
        .map((el) => el.trim())
        .filter((el) => el !== "");

    //make it all empty first before adding a new one
    tagContainer.innerHTML = "";

    // maps = return new array
    // forEach = run through one time and update the array. Didn't return anything / undefined

    tags.forEach((element) => {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.innerText = element;
        //add tag for each tags
        tagContainer.appendChild(tag);
    });
}

function randomSelect() {
    const times = 30;

    //do anything inside every 100ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        //delay the unhighlight before doing another interval
        setTimeout(() => unHighlightTag(randomTag), 50);
    }, 50);

    //do this after 30*100ms = 3000ms = 3 seconds
    setTimeout(() => {
        // clear interval (stop)
        clearInterval(interval);

        //pick a last random tag to be highlighted again before stop
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");

    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}
