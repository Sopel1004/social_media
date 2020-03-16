import styled from 'styled-components';
import TempList from '../shared/list';

const List = styled(TempList)`
  && {
    @media (min-width: 64em) {
      width: 50%;
    }
  }
`;

export default List;
