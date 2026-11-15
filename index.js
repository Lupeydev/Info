const sounds = [
    "https://raw.githubusercontent.com/lupeydev/Info/main/assets/videos/Yeat-ONNOTHING.webm"
];

let currentIndex = -1;

const video = document.getElementById("video");
const audio = document.getElementById("audio");

function getRandomIndex() {
    if (sounds.length <= 1) return 0;
    
    const randomOffset = Math.floor(Math.random() * (sounds.length - 1)) + 1;
    return (currentIndex + randomOffset) % sounds.length;
}

function playRandom() {
    currentIndex = getRandomIndex();
    const file = sounds[currentIndex];

    video.src = file;
    audio.src = file;

    video.play().catch(err => console.log("Video play error:", err));
    audio.play().catch(err => console.log("Audio play error:", err));
}

video.addEventListener("ended", playRandom);

video.addEventListener("error", function() {
    console.log("Video failed to load, switching to next source...");
    playRandom();
});

window.onclick = function () {
    playRandom();

    video.volume = 0;
    audio.volume = 1;

    const click = document.getElementById("click");
    if (click) click.remove();

    window.onclick = null;
};

document.getElementById("muteButton").addEventListener("click", () => {
  audio.muted = !audio.muted;
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