import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/App';
//import ControlPanel from './ControlPanel';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<div>{App}</div>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ControlPanel />, document.getElementById('clicker'));
registerServiceWorker();
