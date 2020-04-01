import styled from 'styled-components';
import Span from './span';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0.5em 0.25em;
`;

StyledDiv.StyledSpan = Span;

export default StyledDiv;
