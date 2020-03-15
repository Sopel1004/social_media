import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../colors';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.pText};
`;

export default StyledLink;
