import styled from 'styled-components';
import COLORS from '../colors';
import FollowButton from './followButton';

const MessageButton = styled(FollowButton)`
    color: ${COLORS.sText};
    border: 1px solid ${COLORS.primaryDark};
    background-color: transparent;
`;

export default MessageButton;
