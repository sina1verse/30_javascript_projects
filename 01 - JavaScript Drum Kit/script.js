const clapAudio = document.querySelector('audio[data-key="65"]');
const hihatAudio = document.querySelector('audio[data-key="83"]');
const kickAudio = document.querySelector('audio[data-key="68"]');
const openhatAudio = document.querySelector('audio[data-key="70"]');
const boomAudio = document.querySelector('audio[data-key="71"]');
const rideAudio = document.querySelector('audio[data-key="72"]');
const snareAudio = document.querySelector('audio[data-key="74"]');
const tomAudio = document.querySelector('audio[data-key="75"]');
const tinkAudio = document.querySelector('audio[data-key="76"]');

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case "a":
      clapAudio.currentTime = 0;
      clapAudio.play();
      break;

    case "s":
      hihatAudio.currentTime = 0;
      hihatAudio.play();
      break;

    case "d":
      kickAudio.currentTime = 0;
      kickAudio.play();
      break;

    case "f":
      openhatAudio.currentTime = 0;
      openhatAudio.play();
      break;

    case "g":
      boomAudio.currentTime = 0;
      boomAudio.play();
      break;

    case "h":
      rideAudio.currentTime = 0;
      rideAudio.play();
      break;

    case "j":
      snareAudio.currentTime = 0;
      snareAudio.play();
      break;

    case "k":
      tomAudio.currentTime = 0;
      tomAudio.play();
      break;

    case "l":
      tinkAudio.currentTime = 0;
      tinkAudio.play();
      break;

    default:
      break;
  }
});
