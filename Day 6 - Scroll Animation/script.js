const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        //getting the position of the top of a box
        const boxTop = box.getBoundingClientRect().top;

        //see if the top of the box is less than triggerBottom
        boxTop < triggerBottom
            ? box.classList.add("show")
            : box.classList.remove("show");
    });
}
