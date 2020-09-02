import React from 'react';
import ReactDOM from 'react-dom';
//CSS && Bootstrap
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Store && Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// COMPONENTS
import App from './App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion';

const Root = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route path='/pseudo/:pseudo' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
   
);

ReactDOM.render(<Root />, document.getElementById('root'));


