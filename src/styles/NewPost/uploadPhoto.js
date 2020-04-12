import styled from 'styled-components';
import COLORS from '../colors';

const Label = styled.label`
  width: 3em;
  height: 3em;
  padding: 0.25em 0.25em;
  margin: 0 0.5em;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.choosed === true
      ? `1px solid ${COLORS.errorColor}`
      : `1px solid ${COLORS.primaryDark}`};
  border-radius: 2em;
  cursor: pointer;
`;

export default Label;
