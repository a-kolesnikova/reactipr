import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<MuiThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
