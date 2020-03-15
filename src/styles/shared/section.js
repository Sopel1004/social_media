import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 6em);
  overflow-y: scroll;
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 64em) {
    height: calc(100vh - 4em);
  }
`;

export default Section;
