import styled from 'styled-components';
import COLORS from '../colors';

const Search = styled.input`
    width: 90%;
    padding: 0.5em;
    border: 1px solid ${COLORS.primaryDark};
    border-radius: 2em;

    &::placeholder {
        text-align: center;
    }

    &:focus {
        outline: 1px solid ${COLORS.secondaryContrast};
    }

    @media (min-width: 64em) {
        width: 20vw;
        margin: 0;
    }
`;

export default Search;
