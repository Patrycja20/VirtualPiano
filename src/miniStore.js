export const HARP = 'harp'; // Dzwiek harfy
export const PIANO = 'piano';
export const KEYS = ['q',
'w',
'e',
'r',
't',
'y',
'u',
'i',
'o',
'p',
'[',
'z',
'x',
'c',
'v',
'b',
'n',
'm',
',',
'.',
'/',
  '2',
'3',
'4',
'6',
'7',
'9',
'0',
'-',
's',
'd',
'g',
'h',
'j',
'l',
';',
  ];

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

export function getKeys() {
  return KEYS;
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
