import styled from 'styled-components';
import Span from './span';
import COLORS from '../colors';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0.5em 0.25em;

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
    outline: 1px solid ${COLORS.secondaryContrast};
    border-radius: 1em;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 1em;
  }
`;

StyledDiv.StyledSpan = Span;

export default StyledDiv;
