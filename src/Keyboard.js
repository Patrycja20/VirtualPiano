import React from 'react';
import './Keyboard.css';
import {
  getFullSoundFolder,
  addClickedSound,
  removeClickedSound,
  isSoundClicked,
  getKeys,
} from './miniStore';

class Keyboard extends React.Component {
  constructor() {
    super();
    this.state = {
      signatures: '0',
      infoSignatures: 'Off',
      keys: [],
    };
  }

  play = (event) => {
    const sound = event.target.id;
    let soundFolder = getFullSoundFolder();

    const audio = new Audio(`${soundFolder}${sound}.mp3`);
    audio.play();
  };

  changeSignatures = (event) => {
    console.log(this.state.infoSignatures);
    if(event.target.value === '1') this.setState({signatures: '1', infoSignatures: 'On', keys: getKeys()});
    else this.setState({signatures: '0', infoSignatures: 'Off', keys: []});
  };

  render() {

    // const keys = [
    //   { id: 'f3', className: 'white',  keyId: '', },
    //   { id: 'fis3', className: 'black',  keyId: '', },
    //   { id: 'g3', className: 'white l',  keyId: '', },
    //   { id: 'gis3', className: 'black',  keyId: '', },
    //   { id: 'a3', className: 'white l',  keyId: '', },
    //   { id: 'ais3', className: 'black',  keyId: '', },
    //   { id: 'h3', className: 'white l',  keyId: '', },
    //   { id: 'c4', className: 'white',  keyId: '', },
    //   { id: 'cis4', className: 'black',  keyId: '', },
    //   { id: 'd4', className: 'white l',  keyId: '', },
    //   { id: 'dis4', className: 'black',  keyId: '', },
    //   { id: 'e4', className: 'white l',  keyId: '', },
    //   { id: 'f4', className: 'white',  keyId: '', },
    //   { id: 'fis4', className: 'black',  keyId: '', },
    //   { id: 'g4', className: '',  keyId: '', },
    //   { id: 'gis4', className: '',  keyId: '', },
    //   { id: 'a4', className: '',  keyId: '', },
    //   { id: 'ais4', className: '',  keyId: '', },
    //   { id: 'h4', className: '',  keyId: '', },
    //   { id: 'c5', className: '',  keyId: '', },
    //   { id: 'cis5', className: '',  keyId: '', },
    //   { id: 'd5', className: '',  keyId: '', },
    //   { id: 'dis5', className: '',  keyId: '', },
    //   { id: 'e5', className: '',  keyId: '', },
    //   { id: 'f5', className: '',  keyId: '', },
    //   { id: 'fis5', className: '',  keyId: '', },
    //   { id: 'g5', className: '',  keyId: '', },
    //   { id: 'gis5', className: '',  keyId: '', },
    //   { id: 'a5', className: '',  keyId: '', },
    //   { id: 'ais5', className: '',  keyId: '', },
    //   { id: 'h5', className: '',  keyId: '', },
    //   { id: 'c6', className: '',  keyId: '', },
    //   { id: 'cis6', className: '',  keyId: '', },
    //   { id: 'd6', className: '',  keyId: '', },
    //   { id: 'dis6', className: '',  keyId: '', },
    //   { id: 'e6', className: '',  keyId: '', },
    // ];

    // const activeSounds = this.props.activeSounds;

    return (
      <ul className="Casing">
        <div className="options">
          <label className={this.state.infoSignatures}>Signatures On</label><br/>
          <input type="range" className="slider" value={this.state.signatures} min="0" max="1" step="1" onChange={this.changeSignatures}/>
        </div>
        <li id="f3" ref='f3' className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[0]}
        </li>
        <li id="fis3" ref='fis3' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[21]}
        </li>
        <li id="g3" ref='g3' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[1]}
        </li>
        <li id="gis3" ref='gis3' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[22]}
        </li>
        <li id="a3" ref='a3' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[2]}
        </li>
        <li id="ais3" ref='ais3' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[23]}
        </li>
        <li id="h3" ref='h3' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[3]}
        </li>
        <li id="c4" ref='c4' className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[4]}
        </li>
        <li id="cis4" ref='cis4' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[24]}
        </li>
        <li id="d4" ref='d4' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[5]}
        </li>
        <li id="dis4" ref='dis4' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[25]}
        </li>
        <li id="e4" ref='e4' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[6]}
        </li>
        <li id="f4" ref='f4' className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[7]}
        </li>
        <li id="fis4" ref='fis4' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[26]}
        </li>
        <li id="g4" ref='g4' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[8]}
        </li>
        <li id="gis4" ref='gis4' className="black " onMouseDown={(e) => this.play(e)}>
          {this.state.keys[27]}
        </li>
        <li id="a4" ref='a4' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[9]}
        </li>
        <li id="ais4" ref='ais4' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[28]}
        </li>
        <li id="h4" ref='h4' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[10]}
        </li>
        <li id="c5" ref='c5' className="white " onMouseDown={(e) => this.play(e)}>
          {this.state.keys[11]}
        </li>
        <li id="cis5" ref='cis5' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[29]}
        </li>
        <li id="d5" ref='d5' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[12]}
        </li>
        <li id="dis5" ref='dis5' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[30]}
        </li>
        <li id="e5" ref='e5' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[13]}
        </li>
        <li id="f5" ref='f5' className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[14]}
        </li>
        <li id="fis5" ref='fis5' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[31]}
        </li>
        <li id="g5" ref='g5' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[15]}
        </li>
        <li id="gis5" ref='gis5' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[32]}
        </li>
        <li id="a5" ref='a5' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[16]}
        </li>
        <li id="ais5" ref='ais5' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[33]}
        </li>
        <li id="h5" ref='h5' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[17]}
        </li>
        <li id="c6" ref='c6' className="white" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[18]}
        </li>
        <li id="cis6" ref='cis6' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[34]}
        </li>
        <li id="d6" ref='d6' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[19]}
        </li>
        <li id="dis6" ref='dis6' className="black" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[35]}
        </li>
        <li id="e6" ref='e6' className="white l" onMouseDown={(e) => this.play(e)}>
          {this.state.keys[20]}
        </li>
      </ul>
    );
  }
}

export default Keyboard;
