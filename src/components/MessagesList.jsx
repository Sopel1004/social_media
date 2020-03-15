import React from 'react';
import List from '../styles/shared/list';
import StyledLink from '../styles/shared/link';
import Message from './Message';

const MessagesList = ({ messages }) => {
    return (
        <List>
            {messages
                ? messages.map(message => (
                      <List.Element key={message.id}>
                          <StyledLink to={`/m/${message.id}`}>
                              <Message
                                  fullName={message.fullName}
                                  lastMessage={message.content}
                              />
                          </StyledLink>
                      </List.Element>
                  ))
                : 'Loading...'}
        </List>
    );
};

export default MessagesList;
