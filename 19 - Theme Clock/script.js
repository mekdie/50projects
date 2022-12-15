const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const toggleEl = document.querySelector(".toggle");

const needleSecond = document.querySelector(".needle.second");
const needleMinute = document.querySelector(".needle.minute");
const needleHour = document.querySelector(".needle.hour");

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

toggleEl.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "light mode";
    }
    // html.classList.toggle("dark");
});

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

setInterval(setTime, 1000);
