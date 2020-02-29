import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginView from './components/LoginView';
import UserContext from './components/UserContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Discover from './components/Discover';
import NewPost from './components/NewPost';
import Messeges from './components/Messeges';
import Profile from './components/Profile';
import firebase from './config/firebase';

const App = () => {
    const [currentUser, setCurrentUser] = useState({
        auth: false,
        user: null,
        loading: true
    });

    useEffect(() => {
        let isSubscribed = true;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                if (isSubscribed)
                    setCurrentUser({
                        auth: true,
                        user: user,
                        loading: false
                    });
            } else {
                if (isSubscribed)
                    setCurrentUser({
                        auth: false,
                        user: null,
                        loading: false
                    });
            }
        });
        return () => (isSubscribed = false);
    }, []);

    if (currentUser.loading) {
        return <p>Loading...</p>;
    }

    return (
        <UserContext.Provider value={currentUser.user}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginView} />
                    <PrivateRoute path="/" auth={currentUser.auth}>
                        <Header />
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/discover" component={Discover} />
                            <Route path="/create_post" component={NewPost} />
                            <Route path="/messeges" component={Messeges} />
                            <Route path="/profile/:id" component={Profile} />
                        </Switch>
                    </PrivateRoute>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
