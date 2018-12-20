import React from 'react';
import Keyboard from './Keyboard';
import './App.css';

class App extends React.Component {
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
