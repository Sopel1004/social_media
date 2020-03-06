import styled from 'styled-components';
import COLORS from '../colors';

const Button = styled.button`
    width: 80%;
    padding: 0.25em;
    background-color: ${COLORS.primary};
    color: ${COLORS.secondary};
    font-size: 1.25em;
    font-weight: 500;
    border: none;
    border-radius: 1em;
    transition: all 0.5s ease;
    &:focus {
        outline: 2px solid ${COLORS.secondaryContrast};
    }

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media (min-width: 64em) {
        width: 30%;
    }
`;

export default Button;
