import styled from 'styled-components';
import COLORS from '../colors';

const StyledSpan = styled.span`
  padding: 0.75em;
  margin-left: 0.25em;
  background-color: ${props =>
    props.ownMessage ? COLORS.secondary : COLORS.messageLight};
  color: ${props => (props.ownMessage ? COLORS.sText : COLORS.pText)};
  border-radius: 1em;
`;

export default StyledSpan;
