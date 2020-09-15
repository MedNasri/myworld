import React from 'react';
import ReactDOM from 'react-dom';
//Css && Bootstrap
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Store && Router
import StoreRef from './store/store';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// Components
import App from './App';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Notes from './components/Notes';
import Weather from './components/Weather';
import Teams from './components/Teams';
import Connexion from './components/Connexion';

 const Root =() =>(
   <Provider store={StoreRef}>
        <BrowserRouter>
          <Header/>
             <Switch>
                <Route exact path='/' component={Connexion} />
                <Route exact path='/pseudo/:pseudo' component={App} />
                <Route exact path='/notes' component={Notes} />
                <Route exact path='/weather' component={Weather} />
                <Route exact path='/teams' component={Teams} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root'));
