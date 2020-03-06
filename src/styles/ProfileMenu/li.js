import styled from 'styled-components';
import COLORS from '../colors';

const Li = styled.li`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.25em 0.25em;

    &:focus {
        background-color: rgba(0, 0, 0, 0.05);
        outline: 1px solid ${COLORS.secondaryContrast};
        border-radius: 1em;
    }

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 1em;
    }
`;

export default Li;
