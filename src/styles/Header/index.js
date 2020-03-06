import styled from 'styled-components';
import COLORS from '../colors';

const Header = styled.header`
    width: 100%;
    height: 6em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${COLORS.primaryDark};
    background-color: ${COLORS.primaryLight};
    @media (min-width: 64em) {
        height: 4em;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export default Header;
