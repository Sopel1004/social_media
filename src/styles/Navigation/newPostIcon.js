import styled from 'styled-components';
import { ReactComponent as NewPost } from '../../images/plus-circle.svg';
import COLORS from '../colors';

const NewPostIcon = styled(NewPost)`
    width: 2em;
    height: 2em;
    .selected & {
        stroke: ${COLORS.secondary};
    }
`;
export default NewPostIcon;
