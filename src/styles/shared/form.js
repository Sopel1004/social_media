import styled from 'styled-components';
import Input from './input';
import Button from './button';

const Form = styled.form`
  width: 100%;
  padding: 0.5em 0.25em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

Form.Input = Input;
Form.Button = Button;

export default Form;
