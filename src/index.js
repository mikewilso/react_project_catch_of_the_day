import React from 'react';
import { render } from 'react-dom'; //This imports only render method from react-dom.
import { BrowserRouter, Match, Miss } from 'react-router';
//import ReactDOM from 'react-dom'; --This imports all method from react-dom
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main'));