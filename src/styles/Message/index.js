import styled from 'styled-components';
import Name from './name';
import LastMessage from './lastMessage';
import StyledDiv from './div';

const StyledMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  margin: 0.5em 0;
`;

StyledMessage.Name = Name;
StyledMessage.LastMessage = LastMessage;
StyledMessage.StyledDiv = StyledDiv;

export default StyledMessage;
