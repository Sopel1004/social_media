import styled from 'styled-components';
import { ReactComponent as Discover } from '../../images/globe.svg';
import COLORS from '../colors';

const DiscoverIcon = styled(Discover)`
    width: 2em;
    height: 2em;
    .selected & {
        stroke: ${COLORS.secondary};
    }
`;
export default DiscoverIcon;
