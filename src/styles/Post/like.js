import styled from 'styled-components';
import { ReactComponent as LikeIcon } from '../../images/like.svg';

const Like = styled(LikeIcon)`
    grid-area: likes;
    justify-self: center;
    &:hover {
        cursor: pointer;
    }
`;
export default Like;
