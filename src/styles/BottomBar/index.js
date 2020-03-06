import styled from 'styled-components';
import COLORS from '../colors';
import Form from './form';
import SendButton from './button';
import Input from './input';

const Container = styled.div`
    width: 100%;
    border-top: 1px solid ${COLORS.primaryDark};
`;

Container.Form = Form;
Container.Input = Input;
Container.SendButton = SendButton;

export default Container;
