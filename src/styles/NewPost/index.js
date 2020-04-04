import styled from 'styled-components';
import Label from './uploadPhoto';
import Textarea from './textarea';
import Button from './button';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 64em) {
    width: 50%;
  }
`;

Form.Textarea = Textarea;
Form.Button = Button;
Form.Label = Label;

export default Form;
