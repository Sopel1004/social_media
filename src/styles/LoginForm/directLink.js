import styled from 'styled-components';
import COLORS from '../colors';

const DirectLink = styled.a`
  color: ${COLORS.primary};
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 64em) {
    color: ${COLORS.secondary};
  }
`;

export default DirectLink;
