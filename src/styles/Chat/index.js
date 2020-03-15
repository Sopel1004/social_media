import styled from 'styled-components';
import List from '../shared/list';
import ListElement from '../shared/listElement';

const StyledListElement = styled(ListElement).attrs(props => ({
  side: props.side || 'flex-start'
}))`
  width: 100%;
  margin: 0.25em 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.side};
`;

List.Element = StyledListElement;

export default List;
