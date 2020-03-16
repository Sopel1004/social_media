import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginView from './components/LoginView';
import UserContext from './components/UserContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Discover from './components/Discover';
import NewPost from './components/NewPost';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Chat from './components/Chat';
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
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={LoginView}
          />
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/`}
            auth={currentUser.auth}
          >
            <Header />
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/home`} component={Home} />
              <Route
                path={`${process.env.PUBLIC_URL}/discover`}
                component={Discover}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/create_post`}
                component={NewPost}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/messages`}
                component={Messages}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/profile/:id`}
                component={Profile}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/m/:id`}
                component={Chat}
              />
            </Switch>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
