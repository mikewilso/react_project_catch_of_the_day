import React from 'react';
import { render } from 'react-dom'; //This imports only render method from react-dom.
import { BrowserRouter, Match, Miss } from 'react-router';
//import ReactDOM from 'react-dom'; --This imports all method from react-dom
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker}/>
				<Match pattern="/store/:storeid" component={App}/>
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));