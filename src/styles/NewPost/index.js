import styled from 'styled-components';
//import COLORS from '../colors';
import Textarea from './textarea';
import Button from './button';

const Form = styled.form`
    width: 100%;
    max-height: 90%;
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

export default Form;
