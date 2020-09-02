import './App.css';
import React, { Component } from 'react'
import StoreRef from './store/store';
import { Provider } from 'react-redux';
// COMPONENTS
import Header from './components/Header';
import NotFound from './components/NotFound';
import Notes from './components/Notes';
import Weather from './components/Weather';
import Teams from './components/Teams';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {
        return (

            <Provider store={StoreRef}>
                <BrowserRouter>
                    <Header />
                    <Switch>

                        <Route exact path='/notes' component={Notes} />
                        <Route exact path='/weather' component={Weather} />
                        <Route exact path='/teams' component={Teams} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default App;


