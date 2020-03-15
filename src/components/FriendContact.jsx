import React from 'react';
import Avatar from './Avatar';
import StyledDiv from '../styles/FriendContact';

const FriendContact = ({ fullName }) => {
  return (
    <StyledDiv>
      <Avatar size="3em" />
      <StyledDiv.Span>{fullName}</StyledDiv.Span>
    </StyledDiv>
  );
};

export default FriendContact;
