import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Route , BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path ="/" component={Login} />
            <Route path ="/dashboard" component={Dashboard} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
