import React from 'react';
import './Keyboard.css';
import { getFullSoundFolder, getKeys} from './miniStore';

class Keyboard extends React.Component {
  constructor() {
    super();
    this.state = {
      signatures: '0',
      infoSignatures: 'Off',
      keys: [],
    };
  }

  play (event) {
    const sound = event.target.id;
    let soundFolder = getFullSoundFolder();

    const audio = new Audio(`${soundFolder}${sound}.mp3`);
    audio.play();
  }

  changeSignatures = (event) => {
    console.log(this.state.infoSignatures);
    if(event.target.value === '1') this.setState({signatures: '1', infoSignatures: 'On', keys: getKeys()});
    else this.setState({signatures: '0', infoSignatures: 'Off', keys: []});
  }

  render() {
    return (
      <ul className="Casing">
        <div className="options">
          <label className={this.state.infoSignatures}>Signatures On</label><br/>
          <input type="range" className="slider" value={this.state.signatures} min="0" max="1" step="1" onChange={this.changeSignatures}/>
        </div>
        <li id="f3" className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[0]}
        </li>
        <li id="fis3" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[21]}
        </li>
        <li id="g3" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[1]}
        </li>
        <li id="gis3" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[22]}
        </li>
        <li id="a3" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[2]}
        </li>
        <li id="ais3" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[23]}
        </li>
        <li id="h3" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[3]}
        </li>
        <li id="c4" className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[4]}
        </li>
        <li id="cis4" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[24]}
        </li>
        <li id="d4" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[5]}
        </li>
        <li id="dis4" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[25]}
        </li>
        <li id="e4" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[6]}
        </li>
        <li id="f4" className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[7]}
        </li>
        <li id="fis4" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[26]}
        </li>
        <li id="g4" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[8]}
        </li>
        <li id="gis4" className="black " onMouseDown={(e) => this.play(e)}>
          {this.state.keys[27]}
        </li>
        <li id="a4" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[9]}
        </li>
        <li id="ais4" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[28]}
        </li>
        <li id="h4" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[10]}
        </li>
        <li id="c5" className="white " onMouseDown={(e) => this.play(e)}>
          {this.state.keys[11]}
        </li>
        <li id="cis5" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[29]}
        </li>
        <li id="d5" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[12]}
        </li>
        <li id="dis5" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[30]}
        </li>
        <li id="e5" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[13]}
        </li>
        <li id="f5" className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[14]}
        </li>
        <li id="fis5" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[31]}
        </li>
        <li id="g5" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[15]}
        </li>
        <li id="gis5" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[32]}
        </li>
        <li id="a5" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[16]}
        </li>
        <li id="ais5" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[33]}
        </li>
        <li id="h5" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[17]}
        </li>
        <li id="c6" className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[18]}
        </li>
        <li id="cis6" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[34]}
        </li>
        <li id="d6" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[19]}
        </li>
        <li id="dis6" className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[35]}
        </li>
        <li id="e6" className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[20]}
        </li>
      </ul>
    );
  }
}

export default Keyboard;
