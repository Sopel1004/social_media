import styled from 'styled-components';
import COLORS from '../colors';
import Ul from './ul';
import Li from './li';
import Span from './span';

const Menu = styled.div`
  width: 100%;
  min-height: 15em;
  background-color: ${COLORS.primary};
  padding: 0.5em;
  position: absolute;
  top: -0.5em;
  left: 0;
  border-bottom: 1px solid ${COLORS.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.active ? 'flex-start' : 'flex-end')};

  @media (min-width: 64em) {
    width: 35%;
    left: auto;
    right: 0;
    border: 1px solid #cccccc;
    border-radius: 1em;
  }
`;

Menu.Ul = Ul;
Menu.Li = Li;
Menu.Span = Span;

export default Menu;
