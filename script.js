'use strict'

console.log('Птицы готовы к вылету')

const songName = ["solovey", "zarynka", "javoronok" , "slavka" , "drozd", "forest"]

let isSongPlaying = false;
let currentSong = -1;
const btns = document.querySelectorAll(".navbar-item");

const selectSong = (e) => {
  let songSrc = `/audio/${e.target.dataset.song}.mp3`;
  console.log(songSrc)
}

btns.forEach(item => {
  item.addEventListener('click', (e) => {
    selectSong(e);
  });
})
