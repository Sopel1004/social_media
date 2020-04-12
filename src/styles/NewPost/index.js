import styled from 'styled-components';
import Label from './uploadPhoto';
import Textarea from './textarea';
import Button from './button';

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 64em) {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 0.5em;
`;

const Image = styled.img`
  width: 75%;
  border-radius: 0.5em;
  @media (min-width: 64em) {
    width: 50%;
  }
`;

Form.Textarea = Textarea;
Form.Button = Button;
Form.Label = Label;
Form.Container = Container;
Form.Image = Image;

export default Form;
