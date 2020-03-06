import styled from 'styled-components';
import Li from './li';

const Ul = styled.ul`
    width: 100%;
    list-style-type: none;
    margin-top: ${props => props.marginTop || '0'};
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 64em) {
        width: 50%;
    }
`;

Ul.Li = Li;

export default Ul;
