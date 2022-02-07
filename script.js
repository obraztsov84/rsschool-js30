'use strict'

console.log('Птицы готовы к вылету')

let isSongPlaying = false;

let currentSong = "forest";

const playBtn = document.querySelector(".play-btn");
console.log(playBtn.src)



const togglePLayBtn = () => {
  if (isSongPlaying) {
  isSongPlaying = false;
  playBtn.src="./img/svg/play.svg"
  } else {
    isSongPlaying = true;
    playBtn.src="./img/svg/pause.svg"
  }
}


playBtn.addEventListener('click', ()=>{togglePLayBtn()})

const btns = document.querySelectorAll(".navbar-item");

const clearActive = () => {
  btns.forEach(item => {
    item.classList.remove("active")
  })
}

const selectSong = (e) => {
  let pickedSong = e.target.dataset.song;
  let songSrc = `/audio/${pickedSong}.mp3`;
  clearActive();
  console.log(e.target)
  if (pickedSong===currentSong) pauseSong();
}



btns.forEach(item => {
  item.addEventListener('click', (e) => {
    selectSong(e);
  });
})
