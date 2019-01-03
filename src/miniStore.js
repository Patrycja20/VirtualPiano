export const HARP = 'harp'; // Dzwiek harfy
export const PIANO = 'piano';

let sound = 'piano';

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
