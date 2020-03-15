import styled from 'styled-components';
import ListElement from './listElement';

const List = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

List.Element = ListElement;

export default List;
