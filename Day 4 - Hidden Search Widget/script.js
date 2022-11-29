const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    //toggling between adding and removing a class name from an element
    // search with active or not
    search.classList.toggle("active");
    //focus on the input box
    input.focus();
});
