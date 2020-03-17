import styled from 'styled-components';
import COLORS from '../colors';

const Button = styled.button`
  width: 60%;
  padding: 0.25em;
  background-color: ${COLORS.primary};
  color: ${COLORS.secondary};
  font-size: 1.25em;
  font-weight: 700;
  border: none;
  border-radius: 1em;
  margin-top: 1em;
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
    background: linear-gradient(
      90deg,
      ${COLORS.loginPageGradient[0]} 0%,
      ${COLORS.loginPageGradient[1]} 100%
    );
    color: ${COLORS.primary};
  }
`;

export default Button;
