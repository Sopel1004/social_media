import styled from 'styled-components';
import COLORS from '../colors';
import FollowButton from './followButton';

const MessageButton = styled(FollowButton)`
    && {
        color: ${COLORS.pText};
        border: 1px solid ${COLORS.primaryDark};
        background: transparent;
    }
`;

export default MessageButton;
