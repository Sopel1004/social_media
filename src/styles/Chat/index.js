import styled from 'styled-components';
import TempList from '../shared/list';
import TempListElement from '../shared/listElement';

const List = styled(TempList)`
  && {
    overflow-y: scroll;
  }
`;

const ListElement = styled(TempListElement).attrs(props => ({
  side: props.side || 'flex-start'
}))`
  width: 100%;
  margin: 0.25em 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.side};
`;

List.Element = ListElement;

export default List;
