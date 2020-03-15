import styled from 'styled-components';
import TempList from '../shared/list';

const List = styled(TempList)`
    && {
        margin-top: ${props => props.marginTop || '0'};
        overflow-y: unset;

        @media (min-width: 64em) {
            width: 50%;
        }
    }
`;

export default List;
