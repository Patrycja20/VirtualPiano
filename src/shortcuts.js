import { getFullSoundFolder, getVolume } from './miniStore';
import { addClickedSound, removeClickedSound } from './Keyboard';

export let mapKeysToNotes = {
  'q': 'f3',
  'w': 'g3',
  'e': 'a3',
  'r': 'h3',
  't': 'c4',
  'y': 'd4',
  'u': 'e4',
  'i': 'f4',
  'o': 'g4',
  'p': 'a4',
  '[': 'h4',

  'z': 'c5',
  'x': 'd5',
  'c': 'e5',
  'v': 'f5',
  'b': 'g5',
  'n': 'a5',
  'm': 'h5',
  ',': 'c6',
  '.': 'd6',
  '/': 'e6',

  '2': 'fis3',
  '3': 'gis3',
  '4': 'ais3',

  '6': 'cis4',
  '7': 'dis4',
  '9': 'fis4',
  '0': 'gis4',
  '-': 'ais4',

  's': 'cis5',
  'd': 'dis5',
  'g': 'fis5',
  'h': 'gis5',
  'j': 'ais5',

  'l': 'cis6',
  ';': 'dis6',
};

export const handleKeyDown = event => {
  for (let key in mapKeysToNotes) {
    if (event.key === key) {
      const sound = mapKeysToNotes[key];

      const folder = getFullSoundFolder();
      const audio = new Audio(`${folder}${sound}.mp3`);
      audio.volume = getVolume();
      audio.play();

      addClickedSound(sound);
    }
  }
};

export const handleKeyUp = event => {
  for (let key in mapKeysToNotes) {
    if (event.key === key) {
      const sound = mapKeysToNotes[key];
      removeClickedSound(sound);
    }
  }
};
