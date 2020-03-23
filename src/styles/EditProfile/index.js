import styled from 'styled-components';
import TempSection from '../shared/subSection';
import COLORS from '../colors';

const Section = styled(TempSection)`
  && {
    @media (min-width: 64em) {
      width: 60vw;
      height: 80vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px 1px ${COLORS.primaryDark};
      border-radius: 1em;
    }
  }
`;

export default Section;
