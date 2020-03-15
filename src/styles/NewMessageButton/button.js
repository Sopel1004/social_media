import styled from 'styled-components';
import COLORS from '../colors';
import AddIcon from './addIcon';
import ButtonText from './buttonText';

const Button = styled.button`
    width: 60%;
    padding: 0.25em;
    border: none;
    background: linear-gradient(
        90deg,
        ${COLORS.secondary} 0%,
        ${COLORS.secondaryDark} 100%
    );
    border-radius: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        transform: scale(0.99);
    }

    &:focus {
        outline: 2px solid ${COLORS.secondaryContrast};
    }

    @media (min-width: 64em) {
        width: 50%;
    }
`;

Button.AddIcon = AddIcon;
Button.ButtonText = ButtonText;

export default Button;
