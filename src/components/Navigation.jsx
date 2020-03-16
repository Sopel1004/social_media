import React, { useContext } from 'react';
import UserContext from './UserContext';
import Nav from '../styles/Navigation';

const Navigation = () => {
  const currentUser = useContext(UserContext);
  return (
    <Nav>
      <Nav.NavLink
        to={`${process.env.PUBLIC_URL}/home`}
        activeClassName="selected"
        aria-label="Home"
      >
        <Nav.HomeIcon alt="Home" />
      </Nav.NavLink>
      <Nav.NavLink
        to={`${process.env.PUBLIC_URL}/discover`}
        activeClassName="selected"
        aria-label="Discover"
      >
        <Nav.DiscoverIcon alt="Discover" />
      </Nav.NavLink>
      <Nav.NavLink
        to={`${process.env.PUBLIC_URL}/create_post`}
        activeClassName="selected"
        aria-label="New Post"
      >
        <Nav.NewPostIcon alt="NewPost" />
      </Nav.NavLink>
      <Nav.NavLink
        to={`${process.env.PUBLIC_URL}/messages`}
        activeClassName="selected"
        aria-label="Messages"
      >
        <Nav.MessageIcon alt="Messages" />
      </Nav.NavLink>
      <Nav.NavLink
        to={`${process.env.PUBLIC_URL}/profile/${currentUser.uid}`}
        activeClassName="selected"
        aria-label="Profile"
      >
        <Nav.ProfileIcon alt="Profile" />
      </Nav.NavLink>
    </Nav>
  );
};

export default Navigation;
