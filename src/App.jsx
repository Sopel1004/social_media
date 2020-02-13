import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Discover from './components/Discover';
import NewPost from './components/NewPost';
import Messeges from './components/Messeges';
import Profile from './components/Profile';
import LoginView from './components/LoginView';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginView} />
                <Route>
                    <Header />
                    <Switch>
                        <Route path="/home" component={Main} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/create_post" component={NewPost} />
                        <Route path="/messeges" component={Messeges} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
