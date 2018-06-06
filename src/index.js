import React from 'react';
import { render } from 'react-dom'; //This imports only render method from react-dom.
//import ReactDOM from 'react-dom'; --This imports all method from react-dom
import './css/style.css';
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));