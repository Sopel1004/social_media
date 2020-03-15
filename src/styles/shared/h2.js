import styled from 'styled-components';
import COLORS from '../colors';

const H2 = styled.h2`
    margin: 0 0 0 0.25em;
    color: ${COLORS.secondaryDark};
    align-self: flex-start;
    @media (min-width: 64em) {
        width: 50%;
        align-self: center;
    }
`;

export default H2;
