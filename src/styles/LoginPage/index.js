import styled from 'styled-components';
import COLORS from '../colors';
import Button from './button';
import WelcomeText from './welcomeText';

const LoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${COLORS.sText};
  justify-content: space-evenly;
  align-items: flex-start;
  background: linear-gradient(135deg, #c94b4b 0%, #4b134f 100%);
  overflow: hidden;
  position: relative;
`;

LoginPage.Button = Button;
LoginPage.WelcomeText = WelcomeText;

export default LoginPage;
