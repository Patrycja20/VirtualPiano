import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { handleKeyDown } from './shortcuts';

document.addEventListener('keydown', handleKeyDown);

ReactDOM.render(<App/>, document.getElementById('root'));
