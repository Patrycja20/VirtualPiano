import React from 'react';
import './Keyboard.css';

const PIANO_SOUNDS = 'sounds/piano_mp3/';

class Keyboard extends React.Component {

  play (event) {
    const sound = event.target.id;

    const audio = new Audio(`${PIANO_SOUNDS}${sound}.mp3`);
    audio.play();
  }

  render() {
    return (
      <ul className="Casing">
        <li id="f3" className="white" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="fis3" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="g3" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="gis3" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="a3" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="ais3" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="h3" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="c4" className="white" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="cis4" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="d4" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="dis4" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="e4" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="f4" className="white" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="fis4" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="g4" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="gis4" className="black " onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="a4" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="ais4" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="h4" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="c5" className="white " onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="cis5" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="d5" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="dis5" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="e5" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="f5" className="white" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="fis5" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="g5" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="gis5" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="a5" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="ais5" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="h5" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="c6" className="white" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="cis6" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="d6" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="dis6" className="black" onMouseDown={(e) => this.play(e)}>
        </li>
        <li id="e6" className="white l" onMouseDown={(e) => this.play(e)}>
        </li>
      </ul>
    );
  }
}

export default Keyboard;
