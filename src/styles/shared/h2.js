import styled from 'styled-components';
import COLORS from '../colors';

const H2 = styled.h2`
  margin: 0;
  color: ${COLORS.secondaryDark};
  align-self: flex-start;
  padding: 0 0.25em;
  @media (min-width: 64em) {
    width: 50%;
    align-self: center;
  }
`;

export default H2;
