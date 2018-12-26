export function useTool (name)
{
  console.log(name);
  const audio = new Audio(`sounds/piano_mp3/f3.mp3`);
  audio.play();
}

export const shortcuts = {

  toolBrush(event) {

    if (event.key !== 'b') return false;

    useTool('brush');

    return true;

  },

  toolSelect(event) {

    if (event.key !== 'm') return false;

    useTool('select');

    return true;

  },

};