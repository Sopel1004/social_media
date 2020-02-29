import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as GlobeIcon } from '../images/globe.svg';
import { ReactComponent as NewPostIcon } from '../images/plus-circle.svg';
import { ReactComponent as MessegeIcon } from '../images/mail.svg';
import { ReactComponent as ProfileIcon } from '../images/user.svg';
import UserContext from './UserContext';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 10px;
`;

const StyledHomeIcon = styled(HomeIcon)`
    width: 32px;
    height: 32px;
    .selected & {
        stroke: #b90292;
        stroke-width: 1.25px;
    }
`;
const StyledGlobeIcon = styled(GlobeIcon)`
    width: 32px;
    height: 32px;
    .selected & {
        stroke: #b90292;
        stroke-width: 1.25px;
    }
`;
const StyledNewPostIcon = styled(NewPostIcon)`
    width: 32px;
    height: 32px;
    .selected & {
        stroke: #b90292;
        stroke-width: 1.25px;
    }
`;
const StyledMessegeIcon = styled(MessegeIcon)`
    width: 32px;
    height: 32px;
    .selected & {
        stroke: #b90292;
        stroke-width: 1.25px;
    }
`;
const StyledProfileIcon = styled(ProfileIcon)`
    width: 32px;
    height: 32px;
    .selected & {
        stroke: #b90292;
        stroke-width: 1.25px;
    }
`;

const Navigation = () => {
    const currentUser = useContext(UserContext);
    return (
        <Nav>
            <NavLink to="/home" activeClassName="selected">
                <StyledHomeIcon />
            </NavLink>
            <NavLink to="/discover" activeClassName="selected">
                <StyledGlobeIcon />
            </NavLink>
            <NavLink to="/create_post" activeClassName="selected">
                <StyledNewPostIcon />
            </NavLink>
            <NavLink to="/messeges" activeClassName="selected">
                <StyledMessegeIcon />
            </NavLink>
            <NavLink
                to={`/profile/${currentUser.uid}`}
                activeClassName="selected"
            >
                <StyledProfileIcon />
            </NavLink>
        </Nav>
    );
};

export default Navigation;
