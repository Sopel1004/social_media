import styled from 'styled-components';

const WelcomeText = styled.span`
  display: none;
  @media (min-width: 64em) {
    display: block;
    font-size: 2em;
    font-weight: 700;
    margin: 4em 0 1em 10em;
    letter-spacing: 0.15em;
  }
`;

export default WelcomeText;
