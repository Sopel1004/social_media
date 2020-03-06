import styled from 'styled-components';
import Li from './li';

const Ul = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`;

Ul.Li = Li;

export default Ul;
