import React, { useContext } from 'react';
import Avatar from './Avatar';
import StyledMessage from '../styles/Message';
import UserContext from './UserContext';

const Message = ({ fullName, lastMessage, date, lastMessageUserID }) => {
  const newDate = new Date(date.seconds * 1000);
  const currentUser = useContext(UserContext);
  return (
    <StyledMessage>
      <Avatar size="3em" />
      <StyledMessage.StyledDiv>
        <StyledMessage.Name>{fullName}</StyledMessage.Name>
        <StyledMessage.LastMessage>
          {`${
            lastMessageUserID === currentUser.uid ? 'You: ' : ''
          }${lastMessage}\t ${newDate.getHours()}:${newDate.getMinutes()}`}
        </StyledMessage.LastMessage>
      </StyledMessage.StyledDiv>
    </StyledMessage>
  );
};

export default Message;
