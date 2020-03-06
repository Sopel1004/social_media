import styled from 'styled-components';
import COLORS from '../colors';

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em;
    border-bottom: 1px solid ${COLORS.primaryDark};
    @media (min-width: 64em) {
        box-shadow: none;
    }
`;

export default Header;
