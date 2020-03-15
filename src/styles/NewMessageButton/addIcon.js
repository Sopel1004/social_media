import { ReactComponent as Add } from '../../images/plus.svg';
import styled from 'styled-components';
import COLORS from '../colors';

const AddIcon = styled(Add)`
    width: 2em;
    height: 2em;
    stroke: ${COLORS.primary};
`;

export default AddIcon;
