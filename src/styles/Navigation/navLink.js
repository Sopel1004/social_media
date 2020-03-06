import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    @media (min-width: 64em) {
        width: 6em;
        display: flex;
        place-content: center;
        padding: 0.5em;
        border-radius: 0.5em;
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
`;

export default StyledNavLink;
