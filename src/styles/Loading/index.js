import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from '../../images/loading.svg';

const Loading = styled(LoadingIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;
