import React from 'react';
import './Keyboard.css';
import {
  getFullSoundFolder,
  addClickedSound,
  removeClickedSound,
  isSoundClicked,
} from './miniStore';

class Keyboard extends React.Component {

  play(event) {
    const sound = event.target.id;
    let soundFolder = getFullSoundFolder();

    const audio = new Audio(`${soundFolder}${sound}.mp3`);
    audio.play();
    addClickedSound(sound);
    console.log(isSoundClicked(sound));
  }

  stop(event) {
    const sound = event.target.id;
    removeClickedSound(sound);
    console.log(isSoundClicked(sound));

  }

  render() {
    const aaa = `white ${isSoundClicked('f3') ? 'active' : null}`;
    console.log('aaa', aaa);
    return (
      <ul className="Casing">
        <li id="f3" className={aaa} onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="fis3" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="g3" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="gis3" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="a3" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="ais3" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="h3" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="c4" className="white" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="cis4" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="d4" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="dis4" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="e4" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="f4" className="white" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="fis4" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="g4" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="gis4" className="black " onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="a4" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="ais4" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="h4" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="c5" className="white " onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="cis5" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="d5" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="dis5" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="e5" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="f5" className="white" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="fis5" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="g5" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="gis5" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="a5" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="ais5" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="h5" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="c6" className="white" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="cis6" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="d6" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="dis6" className="black" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
        <li id="e6" className="white l" onMouseDown={this.play} onMouseUp={this.stop}>
        </li>
      </ul>
    );
  }
}

export default Keyboard;
