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

export let mapKeysToPrettyNameNotes = {
  'q': 'f',
  'w': 'g',
  'e': 'a',
  'r': 'h',
  't': 'c4',
  'y': 'd',
  'u': 'e',
  'i': 'f',
  'o': 'g',
  'p': 'a',
  '[': 'h',

  'z': 'c5',
  'x': 'd',
  'c': 'e',
  'v': 'f',
  'b': 'g',
  'n': 'a',
  'm': 'h',
  ',': 'c6',
  '.': 'd',
  '/': 'e',

  '2': 'f#',
  '3': 'g#',
  '4': 'a#',

  '6': 'c#',
  '7': 'd#',
  '9': 'f#',
  '0': 'g#',
  '-': 'a#',

  's': 'c#',
  'd': 'd#',
  'g': 'f#',
  'h': 'g#',
  'j': 'a#',

  'l': 'c#',
  ';': 'd#',
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
