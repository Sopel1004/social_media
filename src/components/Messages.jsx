import React, { useState, useEffect, useContext } from 'react';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';
import NewMessageSection from '../styles/NewMessageButton';
import FriendsListSection from './FriendsListSection';
import MessagesList from './MessagesList';
import firebase from '../config/firebase';
import UserContext from './UserContext';

const Messages = () => {
  const [isActive, setIsActive] = useState(false);
  const currentUser = useContext(UserContext);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    let isSubscribe = true;
    let tempMessages;
    let users;
    firebase
      .firestore()
      .collection('messages')
      .where('users', 'array-contains', currentUser.uid)
      .get()
      .then(snapshot => {
        tempMessages = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            userID: data.users[1],
            content: data.messages.length
              ? data.messages[data.messages.length - 1].content
              : null
          };
        });
      })
      .then(() => {
        firebase
          .firestore()
          .collection('users')
          .get()
          .then(snapshot => {
            users = snapshot.docs.map(doc => ({
              id: doc.id,
              fullName: doc.data().fullName
            }));

            const messages = tempMessages.map(message => {
              let newEl;
              users.forEach(user => {
                if (message.userID === user.id) {
                  newEl = {
                    ...message,
                    fullName: user.fullName
                  };
                }
              });
              return newEl;
            });

            const newMessages = messages.filter(
              message => message.content !== null
            );

            if (isSubscribe) setMessages(newMessages);
          });
      });

    return () => (isSubscribe = false);
  }, [currentUser.uid]);
  return (
    <Section>
      <H2>Messages</H2>
      <NewMessageSection>
        <NewMessageSection.Button onClick={() => setIsActive(!isActive)}>
          <NewMessageSection.Button.AddIcon />
          <NewMessageSection.Button.ButtonText>
            New message
          </NewMessageSection.Button.ButtonText>
        </NewMessageSection.Button>
      </NewMessageSection>
      {isActive && (
        <FriendsListSection closeFriendsList={() => setIsActive(!isActive)} />
      )}
      <MessagesList messages={messages} />
    </Section>
  );
};

export default Messages;
