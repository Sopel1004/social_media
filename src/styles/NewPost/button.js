import styled from 'styled-components';
import COLORS from '../colors';

const Button = styled.button`
    width: 50%;
    padding: 0.5em;
    border: none;
    border-radius: 1em;
    color: ${COLORS.sText};
    margin: 1em;
    background: linear-gradient(
        90deg,
        ${COLORS.secondary} 0%,
        ${COLORS.secondaryDark} 100%
    );
    font-size: 1.1em;
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        transform: scale(0.98);
    }

    &:focus {
        outline: 2px solid ${COLORS.secondaryContrast};
    }
`;

export default Button;
