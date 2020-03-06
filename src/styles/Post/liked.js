import styled from 'styled-components';
import COLORS from '../colors';
import { ReactComponent as LikeIcon } from '../../images/like.svg';

const Liked = styled(LikeIcon)`
    grid-area: likes;
    justify-self: center;
    stroke: ${COLORS.secondary};
    fill: ${COLORS.secondary};
    &:hover {
        cursor: pointer;
    }
`;

export default Liked;
