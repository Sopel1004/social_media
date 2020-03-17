import styled from 'styled-components';
import COLORS from '../colors';

const H2 = styled.h2`
  font-size: 2em;
  @media (min-width: 64em) {
    color: ${COLORS.secondaryDark};
  }
`;

export default H2;
