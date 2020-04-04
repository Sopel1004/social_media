import React, { useContext, useRef, useEffect } from 'react';
import List from '../styles/Chat';
import ChatMessage from './ChatMessage';
import UserContext from './UserContext';
import Loading from './Loading';

const ChatMessagesList = ({ messages }) => {
  const currentUser = useContext(UserContext);
  const list = useRef(null);

  useEffect(() => {
    const elements = list.current.children;
    const lastElement = elements[elements.length - 1];
    if (lastElement !== undefined) {
      list.current.scrollTo(0, lastElement.getBoundingClientRect().top);
    }
  }, [list.current, messages]);

  return (
    <List ref={list}>
      {messages ? (
        messages.map((message) => (
          <List.Element
            key={message.id}
            side={currentUser.uid === message.userID && 'flex-end'}
          >
            <ChatMessage content={message.content} userID={message.userID} />
          </List.Element>
        ))
      ) : (
        <Loading />
      )}
    </List>
  );
};

export default ChatMessagesList;
