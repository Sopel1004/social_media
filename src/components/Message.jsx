import React from 'react';
import Avatar from './Avatar';
import StyledMessage from '../styles/Message';

const Message = ({ fullName, lastMessage }) => {
  return (
    <StyledMessage>
      <Avatar size="3em" />
      <StyledMessage.StyledDiv>
        <StyledMessage.Name>{fullName}</StyledMessage.Name>
        <StyledMessage.LastMessage>{lastMessage}</StyledMessage.LastMessage>
      </StyledMessage.StyledDiv>
    </StyledMessage>
  );
};

export default Message;
