import styled from 'styled-components';
import COLORS from '../colors';
import Button from './button';
import WelcomeText from './welcomeText';
import background from '../../images/background.png';

const LoginPage = styled.section`
    width: 100vw;
    height: 100vh;
    display: grid;
    color: ${COLORS.sText};
    grid-template-rows: 1fr auto auto auto 5em;
    justify-items: center;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
`;

LoginPage.Button = Button;
LoginPage.WelcomeText = WelcomeText;

export default LoginPage;
