import React, { useState, useEffect, useContext } from 'react';
import Section from '../styles/shared/subSection';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../config/firebase';
import ChatBottomBar from './ChatBottomBar';
import ChatMessagesList from './ChatMessagesList';
import UserContext from './UserContext';

const Chat = () => {
  let history = useHistory();
  const { id } = useParams();
  const [chatData, setChatData] = useState(null);
  const [userName, setUserName] = useState(null);
  const currentUser = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('messages')
      .doc(id)
      .onSnapshot((doc) => {
        setChatData(doc.data());
      });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    if (chatData !== null && userName === null) {
      const [anotherUserId] = chatData.users.filter(
        (user) => user !== currentUser.uid
      );
      firebase
        .firestore()
        .collection('users')
        .doc(anotherUserId)
        .get()
        .then((doc) => {
          setUserName(doc.data().fullName);
        });
    }
  }, [chatData, userName, currentUser]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Section>
      <Section.Header>
        <LeftArrowIcon
          onClick={goBack}
          tabIndex={0}
          role="button"
          aria-label="More"
          style={{ cursor: 'pointer' }}
          onKeyDown={(e) => e.key === 'Enter' && goBack}
        />
        <Section.H3>{userName ? userName : 'Loading...'}</Section.H3>
      </Section.Header>
      <ChatMessagesList messages={chatData ? chatData.messages : null} />
      <ChatBottomBar chatID={id} />
    </Section>
  );
};

export default Chat;
