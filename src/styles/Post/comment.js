import styled from 'styled-components';
import { ReactComponent as CommentIcon } from '../../images/comment.svg';

const Comment = styled(CommentIcon)`
    grid-area: comments;
    justify-self: center;
    &:hover {
        cursor: pointer;
    }
`;

export default Comment;
