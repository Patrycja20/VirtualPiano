let mapKeysToNotes = {
  q: 'f3',
  w: 'g3',
  e: 'a3',
  r: 'h3',
  t: 'c4',
  y: 'd4',
  u: 'e4',
  i: 'f4',
  o: 'g4',
  p: 'a4',
  '1': 'a',
};

const PIANO_SOUNDS = 'sounds/piano_mp3/';

export const handleKeyDown = event => {

  for (let key in mapKeysToNotes) {
    if (event.key === key) {
      const sound = mapKeysToNotes[key];

      const audio = new Audio(`${PIANO_SOUNDS}${sound}.mp3`);
      audio.play();
    }
  }

};
