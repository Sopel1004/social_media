import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Discover from './components/Discover';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/discover" component={Discover} />
            </Switch>
        </Router>
    );
};

export default App;
