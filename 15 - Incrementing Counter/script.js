const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        //parseInt, Number, +
        const target = parseInt(counter.getAttribute("data-target"));
        const c = +counter.innerText;

        const increment = target / 200; //steps increment 0 20 40 60 80 etc

        //if c already reach the target then stop, otherwise keep going
        if (c < target) {
            counter.innerText = Math.ceil(`${c + increment}`);

            //recursive counters
            setTimeout(updateCounter, 1);

            // updateCounter(); not gonna work because it is in an instant
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
