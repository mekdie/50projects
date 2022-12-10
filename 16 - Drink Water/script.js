const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, id) => {
    cup.addEventListener("click", () => {
        hightlightCups(id);
    });
});

const hightlightCups = (id) => {
    //if the last clicked glass is full and the next element is empty, then remove it to redo
    if (
        smallCups[id].classList.contains("full") &&
        !smallCups[id].nextElementSibling.classList.contains("full")
    ) {
        id--;
    }

    //check the small cups before until the current cup (id)

    //add the all previous cups of current clicked empty cups
    smallCups.forEach((cup, id2) => {
        if (id2 <= id) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
    updateBigCup();
};

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}
