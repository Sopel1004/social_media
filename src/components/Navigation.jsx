import React, { useContext } from 'react';
import UserContext from './UserContext';
import Nav from '../styles/Navigation';

const Navigation = () => {
    const currentUser = useContext(UserContext);
    return (
        <Nav>
            <Nav.NavLink
                to="/home"
                activeClassName="selected"
                aria-label="Home"
            >
                <Nav.HomeIcon alt="Home" />
            </Nav.NavLink>
            <Nav.NavLink
                to="/discover"
                activeClassName="selected"
                aria-label="Discover"
            >
                <Nav.DiscoverIcon alt="Discover" />
            </Nav.NavLink>
            <Nav.NavLink
                to="/create_post"
                activeClassName="selected"
                aria-label="New Post"
            >
                <Nav.NewPostIcon alt="NewPost" />
            </Nav.NavLink>
            <Nav.NavLink
                to="/messages"
                activeClassName="selected"
                aria-label="Messages"
            >
                <Nav.MessageIcon alt="Messages" />
            </Nav.NavLink>
            <Nav.NavLink
                to={`/profile/${currentUser.uid}`}
                activeClassName="selected"
                aria-label="Profile"
            >
                <Nav.ProfileIcon alt="Profile" />
            </Nav.NavLink>
        </Nav>
    );
};

export default Navigation;
