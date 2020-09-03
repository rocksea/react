import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App1 from './App1';
import App2 from './App2';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
            <Route exact path="/" component={App1}/>
            <Route exact path="/App1" component={App1}/>
            <Route exact path="/App2" component={App2}/>
            </div>
            </Router>
        );
    }
}


export default App;
