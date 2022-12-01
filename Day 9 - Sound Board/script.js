const sounds = ["C", "D", "E", "F", "G", "A", "B", "C5"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        //whenever we click a sound, it will stop all other sounds
        stopSongs();

        document.getElementById(sound.toLowerCase()).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound.toLowerCase());
        song.pause(); // pause a song

        song.currentTime = 0; // reset a song
    });
}
