import MediaPlayer from "./MediaPlayer.js";
// import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [
    // new AutoPlay()
  ],
});

const play = document.querySelector("#play");
const mute = document.querySelector("#mute");

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();
