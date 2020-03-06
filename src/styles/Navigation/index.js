import styled from 'styled-components';
import StyledNavLink from './navLink';
import HomeIcon from './homeIcon';
import DiscoverIcon from './discoverIcon';
import NewPostIcon from './newPostIcon';
import MessageIcon from './messageIcon';
import ProfileIcon from './profileIcon';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5em;

    @media (min-width: 64em) {
        width: 30vw;
        margin: 0;
    }
`;

Nav.NavLink = StyledNavLink;
Nav.HomeIcon = HomeIcon;
Nav.DiscoverIcon = DiscoverIcon;
Nav.NewPostIcon = NewPostIcon;
Nav.MessageIcon = MessageIcon;
Nav.ProfileIcon = ProfileIcon;

export default Nav;
