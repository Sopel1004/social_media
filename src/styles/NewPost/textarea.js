import styled from 'styled-components';
import COLORS from '../colors';

const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    border: 1px solid ${COLORS.primaryDark};
    padding: 0.25em;
    font-size: 1.25em;
`;

export default Textarea;
