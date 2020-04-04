import React from 'react';
import List from '../styles/shared/list';
import FriendContact from './FriendContact';
import StyledLink from '../styles/shared/link';
import Loading from './Loading';

const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends ? (
        friends.map((friend) => (
          <List.Element key={friend.id}>
            <StyledLink to={`/m/${friend.chatID}`}>
              <FriendContact fullName={friend.fullName} />
            </StyledLink>
          </List.Element>
        ))
      ) : (
        <Loading />
      )}
    </List>
  );
};

export default FriendsList;
