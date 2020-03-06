import styled from 'styled-components';
import COLORS from '../colors';

const SendButton = styled.button`
    font-size: 1.25em;
    font-weight: 500;
    color: ${COLORS.secondary};
    background-color: transparent;
    border: none;
    &:focus {
        outline: 2px solid ${COLORS.secondaryContrast};
    }

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export default SendButton;
