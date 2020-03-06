import styled from 'styled-components';
import { ReactComponent as LeftArrowIcon } from '../../images/arrow-left.svg';
import COLORS from '../colors';

const LeftArrow = styled(LeftArrowIcon)`
    width: 2em;
    height: 2em;
    stroke: ${COLORS.primary};
    stroke-width: 2px;
    justify-self: start;
    &:focus {
        outline: 2px solid ${COLORS.secondaryContrast};
    }

    &:hover {
        cursor: pointer;
    }
`;

export default LeftArrow;
