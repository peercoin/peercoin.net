import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { handleHash } from './helpers/Hash.js';

window.onload = handleHash;

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
