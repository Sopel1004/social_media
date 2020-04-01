import styled from 'styled-components';

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 0.5em;
  justify-items: center;

  @media (min-width: 64em) {
    width: 50%;
  }
`;

export default TopBar;
