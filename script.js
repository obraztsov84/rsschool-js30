'use strict'

console.log('Птицы готовы к вылету')

let isSongPlaying = false;

let currentSong = "moho";
let currentBackground = 0;

const audio = document.querySelector(".audio");

const playBtn = document.querySelector(".play-btn");

const player = document.querySelector(".player");
console.log(player)

const togglePLayBtn = () => {
  if (isSongPlaying) {
    isSongPlaying = false;
    playBtn.src="./img/svg/play.svg"
    audio.pause();
  } else {
    isSongPlaying = true;
    playBtn.src="./img/svg/pause.svg"
    audio.play();
  }
}

const backgroundChange = () => {
  const random = Math.floor(Math.random() * 10);
  currentBackground===random?backgroundChange():currentBackground=random;
  player.style.backgroundImage = `url(./img/player-bg${random}.jpg)`
  console.log(`./img/player-bg${random}.jpg`)
}

player.addEventListener('click', backgroundChange)
playBtn.addEventListener('click', ()=>{togglePLayBtn()})

const btns = document.querySelectorAll(".navbar-item");

const clearActive = () => {
  btns.forEach(item => {
    item.classList.remove("active")
  })
}

const selectSong = (e) => {
  let eventElement = e.target.tagName==="A"? e.target.parentNode:e.target
  let pickedSong = eventElement.dataset.song;
  let songSrc = `./audio/${pickedSong}.mp3`;
  clearActive();
  if (currentSong!==eventElement.dataset.song) {
    eventElement.classList.add("active");
    currentSong=eventElement.dataset.song;
    audio.src=songSrc;
    audio.play();
    isSongPlaying = true;
    playBtn.src="./img/svg/play.svg"
    backgroundChange();
    console.log(songSrc)
  } else {
    eventElement.classList.add("active");
    togglePLayBtn();
  }
}

btns.forEach(item => {
  item.addEventListener('click', (e) => {
    selectSong(e);
  });
})
