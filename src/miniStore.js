export const HARP = 'harp'; // Dzwiek harfy
export const PIANO = 'piano';

let sound = 'piano';
let clickedArray = [];

export function setSound(newSound) {
  sound = newSound;
}

export function getSoundName() {
  return sound;
}

export function getFullSoundFolder() {
  return `sounds/${sound}_mp3/`;
}

export function setPianoSound() {
  sound = PIANO;
}

export function setHarpSound() {
  sound = HARP;
}


export function addClickedSound(soundName) {
  clickedArray.push(soundName);
}

export function removeClickedSound(soundName) {
  clickedArray = clickedArray.filter(el => el !== soundName);
}

export function isSoundClicked(soundName) {
  return clickedArray.filter(el => el === soundName).length !== 0;
}
