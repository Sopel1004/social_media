import React, { useState, useContext } from 'react';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import { useHistory } from 'react-router-dom';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';
import Form from '../styles/NewPost';

const NewPost = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const currentUser = useContext(UserContext);
  const history = useHistory();

  const addPost = async e => {
    e.preventDefault();
    if (textAreaValue) {
      let userData;
      await firebase
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
            .add({
              userId: currentUser.uid,
              userName: userData.fullName,
              content: textAreaValue,
              createdAt: Date.now(),
              likes: [],
              likesNumber: 0,
              comments: []
            });
        })
        .then(() => setTextAreaValue(''))
        .then(() => history.push(`/home`));
    }
  };

  return (
    <Section>
      <H2>Create post</H2>
      <Form onSubmit={addPost}>
        <Form.Textarea
          placeholder="Write something..."
          rows="18"
          value={textAreaValue}
          onChange={e => setTextAreaValue(e.currentTarget.value)}
        ></Form.Textarea>
        <Form.Button type="submit" disabled={!textAreaValue}>
          Post
        </Form.Button>
      </Form>
    </Section>
  );
};

export default NewPost;
