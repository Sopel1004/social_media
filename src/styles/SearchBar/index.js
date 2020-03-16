import styled from 'styled-components';
import Search from './search';

const Form = styled.form`
  width: 100%;

  @media (min-width: 64em) {
    width: 20vw;
    margin: 0;
  }
`;

Form.Search = Search;

export default Form;
