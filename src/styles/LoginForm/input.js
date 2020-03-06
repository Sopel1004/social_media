import styled from 'styled-components';
import COLORS from '../colors';

const Input = styled.input`
    width: 60%;
    padding: 0.25em;
    border: 2px solid ${COLORS.primary};
    background-color: transparent;
    border-radius: 1em;
    margin: 0.25em 0 1.25em 0;
    color: ${COLORS.sText};

    &:focus {
        background-color: rgba(255, 255, 255, 0.1);
        outline: 2px solid ${COLORS.secondaryContrast};
    }
`;

export default Input;
