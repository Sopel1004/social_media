import React, { useState, useContext } from 'react';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import Container from '../styles/BottomBar';

const BottomBar = ({ postId }) => {
  const [inputValue, setInputValue] = useState('');
  const currentUser = useContext(UserContext);

  const addComment = async e => {
    e.preventDefault();

    let newId = Math.floor(Math.random() * 1000000);
    let userData;
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .get()
      .then(doc => {
        userData = doc.data();
      })
      .then(() => {
        firebase
          .firestore()
          .collection('posts')
          .doc(postId)
          .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
              id: newId,
              userId: currentUser.uid,
              userName: userData.fullName,
              content: inputValue,
              createdAt: Date.now()
            })
          })
          .then(() => setInputValue(''));
      });
  };

  return (
    <Container>
      <Container.Form onSubmit={addComment}>
        <Container.Input
          type="text"
          placeholder="Write a comment..."
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
          autoFocus
        ></Container.Input>
        <Container.SendButton type="submit">Send</Container.SendButton>
      </Container.Form>
    </Container>
  );
};

export default BottomBar;
