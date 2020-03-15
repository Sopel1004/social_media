import styled from 'styled-components';
import StyledSpan from './span';

const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: ${props => (props.ownMessage ? 'flex-end' : 'flex-start')};
  padding: 0.25em 0;
  margin: 0 0.5em;
`;

StyledDiv.StyledSpan = StyledSpan;

export default StyledDiv;
