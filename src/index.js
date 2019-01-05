import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { handleKeyDown, handleKeyUp } from './shortcuts';

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

ReactDOM.render(<App/>, document.getElementById('root'));
