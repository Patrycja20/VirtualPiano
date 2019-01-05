import React from 'react';
import Keyboard from './Keyboard';
import './App.css';
import { mapKeysToNotes } from './shortcuts';

class App extends React.Component {
  initSounds() {
    this.iterateSounds('piano');
    this.iterateSounds('harp');
  }

  iterateSounds(name) {
    const path = `sounds/${name}_mp3/`;
    for (let i in mapKeysToNotes) {
      const sound = mapKeysToNotes[i];
      new Audio(`${path}${sound}.mp3`);
    }
  }

  componentDidMount() {
    this.initSounds();
  }

  render() {
    return (
      <div>
        <div className="NameApp">
          Virtual Piano
        </div>
        <Keyboard/>
      </div>
    );
  }
}

export default App;
