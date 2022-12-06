const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); //getting all .circle class a a node

//selecting active node by default
let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    //to make sure it keeps  within the boundaries
    if (currentActive > circles.length) {
        currentActive = circle.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    //going through the loop, and then apply all active classes for id less than currentActive
    //id of the node is starting from 0 meanwhile currentActive is 1.

    //so if the activated circle is up to 2, then id is still 1. So make id 0 and 1 (or 1 and 2) all active

    circles.forEach((circle, id) => {
        if (id < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    //getting all actives class
    const actives = document.querySelectorAll(".active");

    //make it into 33% 66% 99%
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    // only 1 on the further left active
    if (currentActive === 1) {
        prev.disabled = true;
    } // only 1 on the further right active
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    // in the middle
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
