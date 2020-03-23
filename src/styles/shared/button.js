import styled from 'styled-components';
import COLORS from '../colors';

const Button = styled.button`
  width: 40%;
  padding: 0.25em;
  background-color: ${COLORS.secondary};
  color: ${COLORS.primary};
  font-weight: 700;
  padding: 0.5em;
  border: none;
  border-radius: 2em;
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
`;

export default Button;
