import styled from 'styled-components';
import COLORS from '../colors';

const Label = styled.label`
  width: 50%;
  padding: 0.25em 0.5em;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.choosed === true
      ? `1px solid ${COLORS.approvalColor}`
      : `1px solid ${COLORS.primaryDark}`};
  border-radius: 1em;
  cursor: pointer;
`;

export default Label;
