import React from 'react';
import List from '../styles/MessagesList';
import StyledLink from '../styles/shared/link';
import Message from './Message';

const MessagesList = ({ messages }) => {
  return (
    <List>
      {messages
        ? messages.map(message => (
            <List.Element key={message.id}>
              <StyledLink to={`${process.env.PUBLIC_URL}/m/${message.id}`}>
                <Message
                  fullName={message.fullName}
                  lastMessage={message.content}
                  date={message.timestamp}
                  lastMessageUserID={message.lastMessageUserID}
                />
              </StyledLink>
            </List.Element>
          ))
        : 'Loading...'}
    </List>
  );
};

export default MessagesList;
