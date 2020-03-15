import styled from 'styled-components';
import Button from './button';

const NewMessageSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;

  @media (min-width: 64em) {
    width: 50%;
  }
`;

NewMessageSection.Button = Button;

export default NewMessageSection;
