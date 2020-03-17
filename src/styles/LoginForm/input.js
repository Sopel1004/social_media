import styled from 'styled-components';
import COLORS from '../colors';

const Input = styled.input`
  width: 60%;
  padding: 0.5em;
  border: 2px solid ${COLORS.primary};
  background-color: transparent;
  border-radius: 2em;
  margin: 0.25em 0 1.25em 0;
  color: ${COLORS.sText};

  &:focus {
    outline: 2px solid ${COLORS.secondaryContrast};
  }

  @media (min-width: 64em) {
    color: ${COLORS.pText};
    border: 2px solid ${COLORS.primaryDark};
    background-color: ${COLORS.primaryDark};
  }
`;

export default Input;
