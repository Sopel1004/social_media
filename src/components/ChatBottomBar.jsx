import React, { useState, useContext } from 'react';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import Container from '../styles/BottomBar';

const ChatBottomBar = ({ chatID }) => {
  const [inputValue, setInputValue] = useState('');
  const currentUser = useContext(UserContext);

  const addMessage = async e => {
    e.preventDefault();

    let newId = Math.floor(Math.random() * 1000000);
    firebase
      .firestore()
      .collection('messages')
      .doc(chatID)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          id: newId,
          userID: currentUser.uid,
          content: inputValue,
          createdAt: Date.now()
        }),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => setInputValue(''));
  };

  return (
    <Container>
      <Container.Form onSubmit={addMessage}>
        <Container.Input
          type="text"
          placeholder="Write a message..."
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
          required
        ></Container.Input>
        <Container.SendButton type="submit">Send</Container.SendButton>
      </Container.Form>
    </Container>
  );
};

export default ChatBottomBar;
