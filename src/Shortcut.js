import React from 'react';
//import {shortcuts} from 'shortcuts.js';


let registeredShortcuts = [];


const handleKeyDown = event => {

  for (let i = 0; i < registeredShortcuts.length; i += 1) {

    const shortcut = registeredShortcuts[i];

    if (shortcut(event)) {
      console.log('kliknięto coś');

      event.preventDefault();

      break;

    }

  }

};

document.addEventListener('keydown', handleKeyDown);

class Shortcut extends React.Component {

  componentDidMount() {

    if (!registeredShortcuts.includes(this.props.name)) {
      console.log('kliknięto coś');
      registeredShortcuts = [
        ...registeredShortcuts,

        this.props.name,
    ];

    }

  }

  componentWillUnmount() {

    registeredShortcuts = [
      ...registeredShortcuts.filter(x => x !== this.props.name),


  ];

  }

  render() {

    return this.props.children || null;

  }

}

export default Shortcut;