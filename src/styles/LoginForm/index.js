import styled from 'styled-components';
import Button from './button';
import ErrorMessage from './errorMessage';
import Form from './form';
import H2 from './h2';
import Input from './input';
import LeftArrow from './leftArrow';
import DirectLink from './directLink';
import Span from './span';
import COLORS from '../colors';

const LoginForm = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  right: 0;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  @media (min-width: 64em) {
    width: 40%;
    background-color: ${COLORS.primary};
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    padding: 1em;
    color: ${COLORS.pText};
  }
`;

LoginForm.Button = Button;
LoginForm.ErrorMessage = ErrorMessage;
LoginForm.Form = Form;
LoginForm.H2 = H2;
LoginForm.Input = Input;
LoginForm.LeftArrow = LeftArrow;
LoginForm.DirectLink = DirectLink;
LoginForm.Span = Span;
export default LoginForm;
