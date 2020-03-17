import styled from 'styled-components';
import COLORS from '../colors';

const Input = styled.input`
  width: 80%;
  padding: 0.5em;
  border: 1px solid ${COLORS.inputBackground};
  background-color: ${COLORS.inputBackground};
  border-radius: 1em;

  &:focus {
    outline: 2px solid ${COLORS.secondaryContrast};
  }
`;

export default Input;
