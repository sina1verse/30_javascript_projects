const clapKeyElem = document.querySelector(".js-clap-key");
const clapAudio = document.querySelector('audio[data-key="65"]');

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a") {
    clapAudio.currentTime = 0;
    clapAudio.play();
  }
});
