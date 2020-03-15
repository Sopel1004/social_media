import React, { useContext } from 'react';
import Avatar from './Avatar';
import StyledDiv from '../styles/ChatMessage';
import UserContext from './UserContext';

const ChatMessage = ({ content, userID }) => {
  const currentUser = useContext(UserContext);
  return (
    <StyledDiv ownMessage={currentUser.uid === userID ? true : false}>
      {currentUser.uid !== userID && <Avatar size="2em" />}
      <StyledDiv.StyledSpan
        ownMessage={currentUser.uid === userID ? true : false}
      >
        {content}
      </StyledDiv.StyledSpan>
    </StyledDiv>
  );
};

export default ChatMessage;
