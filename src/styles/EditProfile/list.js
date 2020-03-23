import styled from 'styled-components';
import List from '../shared/list';
import COLORS from '../colors';

const Element = styled(List.Element)`
  && {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 0.5em;

    &:focus {
      background-color: ${COLORS.ligthNavigationHover};
      outline: 1px solid ${COLORS.secondaryContrast};
      border-radius: 1em;
    }

    &:hover {
      cursor: pointer;
      background-color: ${COLORS.ligthNavigationHover};
      border-radius: 1em;
    }
  }
`;

List.Element = Element;

export default List;
