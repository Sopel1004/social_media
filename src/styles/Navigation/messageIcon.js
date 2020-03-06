import styled from 'styled-components';
import { ReactComponent as Messege } from '../../images/mail.svg';
import COLORS from '../colors';

const MessegeIcon = styled(Messege)`
    width: 2em;
    height: 2em;
    .selected & {
        stroke: ${COLORS.secondary};
    }
`;
export default MessegeIcon;
