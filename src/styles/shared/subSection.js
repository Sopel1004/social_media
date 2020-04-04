import styled from 'styled-components';
import COLORS from '../colors';
import Header from './header';
import H3 from './h3';
import { ReactComponent as TempArrowIcon } from '../../images/arrow-left.svg';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.primaryLight};
  display: grid;
  grid-template-rows: 2.5em 1fr;
  z-index: 4;

  @media (min-width: 64em) {
    width: 100%;
    border: 1px solid ${COLORS.primaryDark};
  }
`;

const ArrowIcon = styled(TempArrowIcon)`
  cursor: pointer;
`;

Section.Header = Header;
Section.H3 = H3;
Section.ArrowIcon = ArrowIcon;

export default Section;
