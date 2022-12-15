const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const toggleEl = document.querySelector(".toggle");

const needleSecond = document.querySelector(".needle.second");
const needleMinute = document.querySelector(".needle.minute");
const needleHour = document.querySelector(".needle.hour");

const html = document.querySelector("html");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// Check with localStorage which theme to apply
function setTheme() {
    if (localStorage.getItem("clockTheme") === "light") {
        changeThemeTo("light");
    } else {
        changeThemeTo("dark");
    }
}

// Change theme with it's name in params
function changeThemeTo(theme = "default") {
    if (theme === "dark") {
        localStorage.setItem("clockTheme", "dark");
        html.classList.add("dark");
        toggleEl.innerHTML = "Light mode";
    } else {
        localStorage.setItem("clockTheme", "light");
        html.classList.remove("dark");
        toggleEl.innerHTML = "Dark mode";
    }
}

toggleEl.addEventListener("click", (e) => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "light mode";
    }
    // html.classList.toggle("dark")
    if (localStorage.getItem("clockTheme") === "light") {
        changeThemeTo("dark");
    } else {
        changeThemeTo("light");
    }
});

// // Toggle themes with a click
// toggleThemeBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (localStorage.getItem("clockTheme") === "light") {
//         changeThemeTo("default");
//     } else {
//         changeThemeTo("light");
//     }
// });

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        11,
        0,
        360
    )}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360
    )}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;

    dateEl.innerHTML = `${days[day]}, <span="circle">${date}</span> ${months[month]}`;

    needleHour.style.transition = `${hours === 0 ? "none" : "all 1s linear"}`;

    needleMinute.style.transition = `${
        minutes === 0 ? "none" : "all 1s linear"
    }`;

    needleSecond.style.transition = `${
        seconds === 0 ? "none" : "all 1s linear"
    }`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// a function to scale a range of number into another range of number
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// setTime();
setTheme();
setInterval(setTime, 1000);
