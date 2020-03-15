import React, { useContext } from 'react';
import List from '../styles/Chat';
import ChatMessage from './ChatMessage';
import UserContext from './UserContext';

const ChatMessagesList = ({ messages }) => {
  const currentUser = useContext(UserContext);
  return (
    <List>
      {messages
        ? messages.map(message => (
            <List.Element
              key={message.id}
              side={currentUser.uid === message.userID && 'flex-end'}
            >
              <ChatMessage content={message.content} userID={message.userID} />
            </List.Element>
          ))
        : 'Loading...'}
    </List>
  );
};

export default ChatMessagesList;
