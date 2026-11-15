const sounds = [
    "assets/videos/Yeat-ONNOTHING.webm",
];

let currentIndex = -1;

const video = document.getElementById("video");
const audio = document.getElementById("audio");

function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * sounds.length);
    } while (newIndex === currentIndex);
    return newIndex;
}

function playRandom() {
    currentIndex = getRandomIndex();
    const file = sounds[currentIndex];

    video.src = file;
    audio.src = file;

    video.play();
    audio.play();
}

video.addEventListener("ended", playRandom);

window.onclick = function () {
    playRandom();

    video.volume = 0;
    audio.volume = 1;

    const click = document.getElementById("click");
    if (click) click.remove();

    window.onclick = null;
};

document.getElementById("muteButton").addEventListener("click", () => {
  audio.muted = !audio.muted
});

document.getElementById("playNext").addEventListener("click", () => {
  playRandom();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
        window.open("https://lupeydev.github.io/Info/", "_blank");
    }
});