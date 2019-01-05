import React from 'react';
import './Keyboard.css';
import {

  getFullSoundFolder,
  getKeys,
  setVolume,
  setPianoSound,
  setHarpSound, getVolume,
} from './miniStore';

export let addClickedSound;
export let removeClickedSound;

class Keyboard extends React.Component {
  constructor() {
    super();

    addClickedSound = this.addClickedSound;
    removeClickedSound = this.removeClickedSound;

    this.state = {
      sound:'piano',
      signatures: false,
      keys: [],
      clickedPianoKeys: [],
      volume: ['On', 'On', 'On', 'On'],
    };
  }

  addClickedSound = (soundName) => {
    this.setState({clickedPianoKeys: [...this.state.clickedPianoKeys, soundName]})
  };

  removeClickedSound = (soundName) => {
    this.setState({clickedPianoKeys: this.state.clickedPianoKeys.filter(el => el !== soundName)})
  };

  play = (event) => {
    const sound = event.target.id;
    let soundFolder = getFullSoundFolder();

    const audio = new Audio(`${soundFolder}${sound}.mp3`);
    audio.volume = getVolume();
    audio.play();
  };

  changeSignatures = (event) => {
    if (event.target.value === '1') this.setState({signatures: true, keys: getKeys()});
    else this.setState({signatures: false, keys: []});
  };

  onCheckedPiano = () => {
    setPianoSound();
    this.setState({sound:'piano'});
  };

  onCheckedHarp = () => {
    setHarpSound();
    this.setState({sound:'harp'});
  };

  onSetVolume = (event) => {
    const newVolume = ['On', 'On', 'On', 'On'];
    for (let i = parseInt(event.target.id); i < 4; i++)
      newVolume[i] = 'Off';
    setVolume(parseInt(event.target.id)/4);
    this.setState({volume: newVolume});
  };

  classNameToNote = {
    f3: 'white',
    fis3: 'black',
    g3: 'white l',
    gis3: 'black',
    a3: 'white l',
    ais3: 'black',
    h3: 'white l',
    c4: 'white',
    cis4: 'black',
    d4: 'white l',
    dis4: 'black',
    e4: 'white l',
    f4: 'white',
    fis4: 'black',
    g4: 'white l',
    gis4: 'black',
    a4: 'white l',
    ais4: 'black',
    h4: 'white l',
    c5: 'white',
    cis5: 'black',
    d5: 'white l',
    dis5: 'black',
    e5: 'white l',
    f5: 'white',
    fis5: 'black',
    g5: 'white l',
    gis5: 'black',
    a5: 'white l',
    ais5: 'black',
    h5: 'white l',
    c6: 'white',
    cis6: 'black',
    d6: 'white l',
    dis6: 'black',
    e6: 'white l',
  };

  getClassNameToNote = (note) => {
    if (this.state.clickedPianoKeys.includes(note)) {
      return `${this.classNameToNote[note]} active`;
    }
    return this.classNameToNote[note];
  };

  render() {
    const signaturesClass = this.state.signatures ? 'On' : 'Off';
    const signaturesRange = this.state.signatures ? '1' : '0';

    return (
      <ul className="Casing">
        <div className="options1">
          <label className={signaturesClass}>Signatures</label><br/>
          <input type="range" className="slider" value={signaturesRange} min="0" max="1" step="1"
                 onChange={this.changeSignatures}/>
        </div>
        <div className="radio-group options2">
          <input id="toggle-on" className="toggle toggle-left" name="toggle" type="radio" checked={this.state.sound==='piano'}/>
          <label htmlFor="toggle-on" className="btn" onClick={this.onCheckedPiano}>Piano</label>
          <input id="toggle-off" className="toggle toggle-right" name="toggle" type="radio" checked={this.state.sound==='harp'}/>
          <label htmlFor="toggle-off" className="btn" onClick={this.onCheckedHarp}>Harp</label>
        </div>
        <div className="options3">
          <div id='0'className={this.state.volume[0]==='Off' ? 'Name NameNoActive' : 'Name'} onMouseDown={(e) => this.onSetVolume(e)}>Volume</div>
          <div id='1' className={this.state.volume[0]} onMouseDown={(e) => this.onSetVolume(e)}></div>
          <div id='2' className={this.state.volume[1]} onMouseDown={(e) => this.onSetVolume(e)}></div>
          <div id='3' className={this.state.volume[2]} onMouseDown={(e) => this.onSetVolume(e)}></div>
          <div id='4' className={this.state.volume[3]} onMouseDown={(e) => this.onSetVolume(e)}></div>
        </div>
        <br/>
        <li id="f3" className={this.getClassNameToNote('f3')} onMouseDown={this.play}>
          {this.state.keys[0]}
        </li>
        <li id="fis3" className={this.getClassNameToNote('fis3')} onMouseDown={this.play}>
          {this.state.keys[21]}
        </li>
        <li id="g3" className={this.getClassNameToNote('g3')} onMouseDown={this.play}>
          {this.state.keys[1]}
        </li>
        <li id="gis3" className={this.getClassNameToNote('gis3')} onMouseDown={this.play}>
          {this.state.keys[22]}
        </li>
        <li id="a3" className={this.getClassNameToNote('a3')} onMouseDown={this.play}>
          {this.state.keys[2]}
        </li>
        <li id="ais3" className={this.getClassNameToNote('ais3')} onMouseDown={this.play}>
          {this.state.keys[23]}
        </li>
        <li id="h3" className={this.getClassNameToNote('h3')} onMouseDown={this.play}>
          {this.state.keys[3]}
        </li>
        <li id="c4" className={this.getClassNameToNote('c4')} onMouseDown={this.play}>
          {this.state.keys[4]}
        </li>
        <li id="cis4" className={this.getClassNameToNote('cis4')} onMouseDown={this.play}>
          {this.state.keys[24]}
        </li>
        <li id="d4" className={this.getClassNameToNote('d4')} onMouseDown={this.play}>
          {this.state.keys[5]}
        </li>
        <li id="dis4" className={this.getClassNameToNote('dis4')} onMouseDown={this.play}>
          {this.state.keys[25]}
        </li>
        <li id="e4" className={this.getClassNameToNote('e4')} onMouseDown={this.play}>
          {this.state.keys[6]}
        </li>
        <li id="f4" className={this.getClassNameToNote('f4')} onMouseDown={this.play}>
          {this.state.keys[7]}
        </li>
        <li id="fis4" className={this.getClassNameToNote('fis4')} onMouseDown={this.play}>
          {this.state.keys[26]}
        </li>
        <li id="g4" className={this.getClassNameToNote('g4')} onMouseDown={this.play}>
          {this.state.keys[8]}
        </li>
        <li id="gis4" className={this.getClassNameToNote('gis4')} onMouseDown={this.play}>
          {this.state.keys[27]}
        </li>
        <li id="a4" className={this.getClassNameToNote('a4')} onMouseDown={this.play}>
          {this.state.keys[9]}
        </li>
        <li id="ais4" className={this.getClassNameToNote('ais4')} onMouseDown={this.play}>
          {this.state.keys[28]}
        </li>
        <li id="h4" className={this.getClassNameToNote('h4')} onMouseDown={this.play}>
          {this.state.keys[10]}
        </li>
        <li id="c5" className={this.getClassNameToNote('c5')} onMouseDown={this.play}>
          {this.state.keys[11]}
        </li>
        <li id="cis5" className={this.getClassNameToNote('cis5')} onMouseDown={this.play}>
          {this.state.keys[29]}
        </li>
        <li id="d5" className={this.getClassNameToNote('d5')} onMouseDown={this.play}>
          {this.state.keys[12]}
        </li>
        <li id="dis5" className={this.getClassNameToNote('dis5')} onMouseDown={this.play}>
          {this.state.keys[30]}
        </li>
        <li id="e5" className={this.getClassNameToNote('e5')} onMouseDown={this.play}>
          {this.state.keys[13]}
        </li>
        <li id="f5" className={this.getClassNameToNote('f5')} onMouseDown={this.play}>
          {this.state.keys[14]}
        </li>
        <li id="fis5" className={this.getClassNameToNote('fis5')} onMouseDown={this.play}>
          {this.state.keys[31]}
        </li>
        <li id="g5" className={this.getClassNameToNote('g5')} onMouseDown={this.play}>
          {this.state.keys[15]}
        </li>
        <li id="gis5" className={this.getClassNameToNote('gis5')} onMouseDown={this.play}>
          {this.state.keys[32]}
        </li>
        <li id="a5" className={this.getClassNameToNote('a5')} onMouseDown={this.play}>
          {this.state.keys[16]}
        </li>
        <li id="ais5" className={this.getClassNameToNote('ais5')} onMouseDown={this.play}>
          {this.state.keys[33]}
        </li>
        <li id="h5" className={this.getClassNameToNote('h5')} onMouseDown={this.play}>
          {this.state.keys[17]}
        </li>
        <li id="c6" className={this.getClassNameToNote('c6')} onMouseDown={this.play}>
          {this.state.keys[18]}
        </li>
        <li id="cis6" className={this.getClassNameToNote('cis6')} onMouseDown={this.play}>
          {this.state.keys[34]}
        </li>
        <li id="d6" className={this.getClassNameToNote('d6')} onMouseDown={this.play}>
          {this.state.keys[19]}
        </li>
        <li id="dis6" className={this.getClassNameToNote('dis6')} onMouseDown={this.play}>
          {this.state.keys[35]}
        </li>
        <li id="e6" className={this.getClassNameToNote('e6')} onMouseDown={this.play}>
          {this.state.keys[20]}
        </li>
      </ul>
    );
  }
}

export default Keyboard;
