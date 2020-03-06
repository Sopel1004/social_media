import styled from 'styled-components';

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1.25em 0;

    @media (min-width: 64em) {
        width: 50%;
    }
`;

export default ButtonsContainer;
