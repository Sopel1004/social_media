import React, { useState, useContext } from 'react';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import { useHistory } from 'react-router-dom';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';
import Form from '../styles/NewPost';
import { ReactComponent as ImageIcon } from '../images/image.svg';
import { ReactComponent as CheckIcon } from '../images/check.svg';

const NewPost = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [file, setFile] = useState(null);
  const currentUser = useContext(UserContext);
  const history = useHistory();

  const addPost = async (e) => {
    e.preventDefault();
    if (textAreaValue !== '' || file !== null) {
      let userData;
      await firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          userData = doc.data();
        })
        .then(() => {
          if (file) {
            const uploadTask = firebase
              .storage()
              .ref()
              .child('images/' + file.name)
              .put(file);

            uploadTask.on(
              firebase.storage.TaskEvent.STATE_CHANGED,
              (snapshot) => {
                let progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED:
                    break;
                  case firebase.storage.TaskState.RUNNING:
                    break;
                }
              },
              (error) => {
                switch (error.code) {
                  case 'storage/unauthorized':
                    break;

                  case 'storage/canceled':
                    break;

                  case 'storage/unknown':
                    break;
                }
              },
              () => {
                uploadTask.snapshot.ref
                  .getDownloadURL()
                  .then((downloadURL) => {
                    firebase.firestore().collection('posts').add({
                      userId: currentUser.uid,
                      userName: userData.fullName,
                      content: textAreaValue,
                      createdAt: Date.now(),
                      likes: [],
                      likesNumber: 0,
                      comments: [],
                      image: downloadURL,
                    });
                  })
                  .then(() => setTextAreaValue(''))
                  .then(() => history.push(`/home`));
              }
            );
          } else {
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
                comments: [],
                image: null,
              })
              .then(() => setTextAreaValue(''))
              .then(() => history.push(`/home`));
          }
        });
    }
  };

  return (
    <Section>
      <H2>Create post</H2>
      <Form onSubmit={addPost}>
        <Form.Textarea
          placeholder="Write something..."
          rows="16"
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.currentTarget.value)}
        />
        <Form.Label htmlFor="fileInput" choosed={file !== null ? true : false}>
          {file !== null ? (
            <>
              <CheckIcon />
              Choosed
            </>
          ) : (
            <>
              <ImageIcon />
              Add image
            </>
          )}
        </Form.Label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.currentTarget.files[0])}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <Form.Button
          type="submit"
          disabled={file === null && textAreaValue === '' ? true : false}
        >
          Post
        </Form.Button>
      </Form>
    </Section>
  );
};

export default NewPost;
