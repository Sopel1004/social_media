import styled from 'styled-components';
import TempList from '../shared/list';

const List = styled(TempList)`
  && {
    overflow-y: scroll;
  }
`;

export default List;
