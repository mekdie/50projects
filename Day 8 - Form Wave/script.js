const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("") //split each letters into an array
        .map(
            (letter, idx) => {
                return `<span style="transition-delay: ${
                    idx * 65
                }ms">${letter}</span>`;
            }
            //for each element in the array (letter) make a span inside it
        )
        .join(""); //join back the entire array into a string
});
