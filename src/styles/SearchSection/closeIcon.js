import { ReactComponent as Icon } from '../../images/x.svg';
import styled from 'styled-components';

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  width: 2em;
  height: 2em;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 64em) {
    top: 0.9em;
  }
`;

export default CloseIcon;
