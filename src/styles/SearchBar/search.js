import styled from 'styled-components';
import COLORS from '../colors';

const Search = styled.input`
  width: ${props => (props.isActive ? '90%' : '100%')};
  padding: 0.5em;
  border: 1px solid ${COLORS.primaryDark};
  border-radius: 2em;
  position: relative;
  z-index: 3;
  transition: all 0.25s ease;

  &::placeholder {
    text-align: center;
  }
`;

export default Search;
