import Comment from '../shared/post';
import styled from 'styled-components';
import COLORS from '../colors';

const StyledComment = styled(Comment)`
    && {
        border: none;
        border-radius: 0;
        border-bottom: ${props =>
            props.isLast ? 'none' : `1px solid ${COLORS.primaryDark}`};
        width: 98%;
        margin: 0 auto;
    }
`;

export default StyledComment;
