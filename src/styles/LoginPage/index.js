import styled from 'styled-components';
import COLORS from '../colors';
import Button from './button';
import WelcomeText from './welcomeText';

const LoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  color: ${COLORS.sText};
  grid-template-rows: 1fr auto auto auto 5em;
  justify-items: center;
  align-items: center;
  background: linear-gradient(135deg, #c94b4b 0%, #4b134f 100%);
`;

LoginPage.Button = Button;
LoginPage.WelcomeText = WelcomeText;

export default LoginPage;
