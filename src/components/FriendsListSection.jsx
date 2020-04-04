import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import Section from '../styles/shared/subSection';
import FriendsList from './FriendsList';
import firebase from '../config/firebase';
import UserContext from './UserContext';

const FriendsListSection = ({ closeFriendsList }) => {
  const [friends, setFriends] = useState(null);
  const currentUser = useContext(UserContext);

  useEffect(() => {
    let userFriendsId;
    let userFriends;
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => (userFriendsId = doc.data().following))
      .then(() => {
        firebase
          .firestore()
          .collection('users')
          .get()
          .then((snapshot) => {
            const temp = snapshot.docs.map((doc) => ({
              id: doc.id,
              fullName: doc.data().fullName,
            }));

            userFriends = temp.filter((el) => userFriendsId.includes(el.id));
          })
          .then(() => {
            firebase
              .firestore()
              .collection('messages')
              .where('users', 'array-contains', currentUser.uid)
              .get()
              .then((snapshot) => {
                const chatID = snapshot.docs.map((doc) => {
                  const [anotherUserId] = doc
                    .data()
                    .users.filter((user) => user !== currentUser.uid);
                  return {
                    id: doc.id,
                    userID: anotherUserId,
                  };
                });

                const newUserFriends = userFriends.map((friend) => {
                  let newEl;
                  chatID.forEach((el) => {
                    if (friend.id === el.userID) {
                      newEl = {
                        ...friend,
                        chatID: el.id,
                      };
                    }
                  });
                  return newEl;
                });

                setFriends(newUserFriends);
              });
          });
      });
  }, [currentUser.uid]);

  return (
    <Section>
      <Section.Header>
        <LeftArrowIcon
          onClick={closeFriendsList}
          tabIndex={0}
          role="button"
          aria-label="More"
          style={{ cursor: 'pointer' }}
          onKeyDown={(e) => e.key === 'Enter' && closeFriendsList}
        />
        <Section.H3>New message</Section.H3>
      </Section.Header>
      <FriendsList friends={friends} />
    </Section>
  );
};

export default FriendsListSection;
