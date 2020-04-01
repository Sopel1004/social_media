import styled from 'styled-components';
import COLORS from '../colors';

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.primary};
  padding: 4em 0.5em 1em 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 64em) {
    width: 23vw;
    min-height: 10em;
    max-height: 20em;
    border-radius: 1em;
    border: 1px solid ${COLORS.primaryDark};
  }
`;

export default Section;
