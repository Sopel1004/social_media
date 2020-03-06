import styled from 'styled-components';
import { ReactComponent as Home } from '../../images/home.svg';
import COLORS from '../colors';

const HomeIcon = styled(Home)`
    width: 2em;
    height: 2em;
    .selected & {
        stroke: ${COLORS.secondary};
    }
`;
export default HomeIcon;
