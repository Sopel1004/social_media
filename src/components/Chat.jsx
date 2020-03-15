import React, { useState, useEffect, useContext } from 'react';
import Section from '../styles/shared/subSection';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../config/firebase';
import ChatBottomBar from './ChatBottomBar';
import ChatMessagesList from './ChatMessagesList';

const Chat = () => {
  let history = useHistory();
  const { id } = useParams();
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('messages')
      .doc(id)
      .onSnapshot(doc => {
        setChatData(doc.data());
      });
    console.log('m');
    return () => unsubscribe();
  }, [id]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <Section>
      <Section.Header>
        <LeftArrowIcon onClick={goBack} />
        <Section.H3>{chatData ? 'Name' : 'Loading...'}</Section.H3>
      </Section.Header>
      <ChatMessagesList messages={chatData ? chatData.messages : null} />
      <ChatBottomBar chatID={id} />
    </Section>
  );
};

export default Chat;
