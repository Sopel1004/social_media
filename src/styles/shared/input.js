import styled from 'styled-components';
import COLORS from '../colors';

const Input = styled.input`
  width: 50%;
  padding: 0.25em 0.5em;
  margin: 0.1em 0.25em 0.75em 0.25em;
  border: 1px solid ${COLORS.primaryDark};
  border-radius: 1em;
`;

export default Input;
