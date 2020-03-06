import styled from 'styled-components';
import { ReactComponent as Profile } from '../../images/user.svg';
import COLORS from '../colors';

const ProfileIcon = styled(Profile)`
    width: 2em;
    height: 2em;
    .selected & {
        stroke: ${COLORS.secondary};
    }
`;
export default ProfileIcon;
