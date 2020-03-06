import styled from 'styled-components';
import Button from './button';
import ErrorMessage from './errorMessage';
import Form from './form';
import H2 from './h2';
import Input from './input';
import LeftArrow from './leftArrow';

const LoginForm = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-rows: 2em auto;
    justify-items: center;
    align-items: center;

    @media (min-width: 64em) {
        width: 40%;
        left: auto;
        right: 0;
        background-color: rgba(0, 0, 0, 0.75);
        border-top-left-radius: 1em;
        border-bottom-left-radius: 1em;
        padding: 1em;
    }
`;

LoginForm.Button = Button;
LoginForm.ErrorMessage = ErrorMessage;
LoginForm.Form = Form;
LoginForm.H2 = H2;
LoginForm.Input = Input;
LoginForm.LeftArrow = LeftArrow;

export default LoginForm;
